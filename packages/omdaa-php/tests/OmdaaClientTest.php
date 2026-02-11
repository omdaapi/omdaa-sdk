<?php

declare(strict_types=1);

namespace Omdaa\Api\Tests;

use Omdaa\Api\OmdaaClient;
use PHPUnit\Framework\TestCase;

final class OmdaaClientTest extends TestCase
{
    public function test_omdaa_client_exposes_all_resources(): void
    {
        $client = new OmdaaClient('test-api-key');
        $this->assertNotNull($client->messages());
        $this->assertNotNull($client->sessions());
        $this->assertNotNull($client->webhooks());
        $this->assertNotNull($client->templates());
        $this->assertNotNull($client->scheduled());
        $this->assertNotNull($client->bulk());
        $this->assertNotNull($client->contacts());
        $this->assertNotNull($client->groups());
        $this->assertNotNull($client->chats());
        $this->assertNotNull($client->business());
        $this->assertNotNull($client->storage());
        $this->assertNotNull($client->labels());
        $this->assertNotNull($client->integrations());
        $this->assertNotNull($client->queue());
        $this->assertNotNull($client->interactive());
        $this->assertNotNull($client->apiKeys());
        $this->assertNotNull($client->profile());
        $this->assertNotNull($client->dashboard());
        $this->assertNotNull($client->plans());
        $this->assertNotNull($client->billing());
        $this->assertNotNull($client->referral());
        $this->assertNotNull($client->notifications());
        $this->assertNotNull($client->metrics());
        $this->assertNotNull($client->backup());
        $this->assertNotNull($client->security());
        $this->assertNotNull($client->audit());
        $this->assertNotNull($client->organizations());
        $this->assertNotNull($client->settings());
        $this->assertNotNull($client->channels());
        $this->assertNotNull($client->privacy());
        $this->assertNotNull($client->support());
        $this->assertNotNull($client->proxy());
        $this->assertNotNull($client->calls());
        $this->assertNotNull($client->auth());
        $this->assertNotNull($client->users());
        $this->assertNotNull($client->email());
        $this->assertNotNull($client->ai());
    }
}
