<?php

declare(strict_types=1);

namespace Omdaa\Api\Tests;

use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Psr7\Response;
use Omdaa\Api\Client;
use Omdaa\Api\OmdaaException;
use PHPUnit\Framework\TestCase;

final class ClientTest extends TestCase
{
    public function test_client_constructor_accepts_api_key(): void
    {
        $client = new Client('test-key');
        $this->assertInstanceOf(Client::class, $client);
    }

    public function test_get_returns_decoded_json(): void
    {
        $mock = new MockHandler([
            new Response(200, ['Content-Type' => 'application/json'], '{"success":true,"data":{"id":"1"}}'),
        ]);
        $handlerStack = HandlerStack::create($mock);
        $guzzle = new GuzzleClient(['handler' => $handlerStack]);
        $client = new Client('test-key', 'https://api.test/v1');
        $ref = new \ReflectionClass($client);
        $prop = $ref->getProperty('http');
        $prop->setAccessible(true);
        $prop->setValue($client, $guzzle);

        $result = $client->get('/sessions');
        $this->assertIsArray($result);
        $this->assertTrue($result['success'] ?? false);
        $this->assertSame('1', $result['data']['id'] ?? null);
    }

    public function test_post_sends_json_body(): void
    {
        $mock = new MockHandler([
            new Response(200, ['Content-Type' => 'application/json'], '{"success":true,"messageId":"msg-1"}'),
        ]);
        $handlerStack = HandlerStack::create($mock);
        $guzzle = new GuzzleClient(['handler' => $handlerStack]);
        $client = new Client('test-key', 'https://api.test/v1');
        $ref = new \ReflectionClass($client);
        $prop = $ref->getProperty('http');
        $prop->setAccessible(true);
        $prop->setValue($client, $guzzle);

        $result = $client->post('/messages/send-text', ['sessionId' => 'default', 'to' => '123', 'message' => 'Hi']);
        $this->assertIsArray($result);
        $this->assertSame('msg-1', $result['messageId'] ?? null);
    }

    public function test_request_exception_throws_omdaa_exception(): void
    {
        $mock = new MockHandler([
            new RequestException(
                'Bad Request',
                new \GuzzleHttp\Psr7\Request('POST', '/test'),
                new Response(400, [], '{"message":"Invalid session"}')
            ),
        ]);
        $handlerStack = HandlerStack::create($mock);
        $guzzle = new GuzzleClient(['handler' => $handlerStack]);
        $client = new Client('test-key', 'https://api.test/v1');
        $ref = new \ReflectionClass($client);
        $prop = $ref->getProperty('http');
        $prop->setAccessible(true);
        $prop->setValue($client, $guzzle);

        $this->expectException(OmdaaException::class);
        $this->expectExceptionMessage('Invalid session');
        $client->get('/sessions');
    }
}
