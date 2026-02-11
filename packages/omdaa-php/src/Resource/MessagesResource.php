<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class MessagesResource
{
    public function __construct(private Client $client) {}

    public function sendText(array $params): array
    {
        return $this->client->post('/messages/send-text', [
            'sessionId' => $params['sessionId'],
            'to' => $params['to'],
            'message' => $params['message'] ?? $params['text'] ?? null,
            'quotedMessageId' => $params['quotedMessageId'] ?? null,
            'quoted' => $params['quoted'] ?? null,
        ]);
    }

    public function sendImage(array $params): array
    {
        return $this->client->post('/messages/send-image', $params);
    }

    public function getReceived(array $params = []): array
    {
        return $this->client->get('/messages/received', $params);
    }

    public function getSent(array $params = []): array
    {
        return $this->client->get('/messages/sent', $params);
    }

    public function getStats(array $params = []): array
    {
        return $this->client->get('/messages/stats', $params);
    }

    public function getByChat(string $remoteJid, array $params = []): array
    {
        return $this->client->get('/messages/chat/' . rawurlencode($remoteJid), $params);
    }

    public function search(array $params = []): array
    {
        return $this->client->get('/messages/search', $params);
    }

    public function getRecentChats(array $params = []): array
    {
        return $this->client->get('/messages/recent-chats', $params);
    }

    public function getChats(array $params = []): array
    {
        return $this->client->get('/messages/chats', $params);
    }

    public function deleteMessage(string $messageId): array
    {
        return $this->client->delete('/messages/' . rawurlencode($messageId));
    }

    public function forward(array $body): array
    {
        return $this->client->post('/messages/forward', $body);
    }

    public function forwardMultiple(array $body): array
    {
        return $this->client->post('/messages/forward-multiple', $body);
    }

    public function deleteMultiple(array $body): array
    {
        return $this->client->delete('/messages/multiple', $body);
    }

    public function schedule(array $body): array
    {
        return $this->client->post('/messages/schedule', $body);
    }

    public function sendLocation(array $body): array
    {
        return $this->client->post('/messages/send-location', $body);
    }

    public function sendContact(array $body): array
    {
        return $this->client->post('/messages/send-contact', $body);
    }

    public function sendVoice(array $body): array
    {
        return $this->client->post('/messages/send-voice', $body);
    }

    public function sendAudio(array $body): array
    {
        return $this->client->post('/messages/send-audio', $body);
    }

    public function sendReaction(array $body): array
    {
        return $this->client->post('/messages/reaction', $body);
    }

    public function removeReaction(array $body): array
    {
        return $this->client->delete('/messages/reaction', $body);
    }

    public function sendReadReceipt(array $body): array
    {
        return $this->client->post('/messages/read-receipt', $body);
    }

    public function markChatRead(array $body): array
    {
        return $this->client->post('/messages/mark-chat-read', $body);
    }

    public function getReadStatus(string $messageId): array
    {
        return $this->client->get('/messages/read-status/' . rawurlencode($messageId));
    }

    public function updateReadReceiptsPrivacy(array $body): array
    {
        return $this->client->put('/messages/privacy/read-receipts', $body);
    }

    public function sendTyping(array $body): array
    {
        return $this->client->post('/messages/typing', $body);
    }

    public function sendRecording(array $body): array
    {
        return $this->client->post('/messages/recording', $body);
    }

    public function sendFile(array $body): array
    {
        return $this->client->post('/messages/send-file', $body);
    }

    public function sendMedia(array $body): array
    {
        return $this->client->post('/messages/send-media', $body);
    }

    public function sendPoll(array $body): array
    {
        return $this->client->post('/messages/send-poll', $body);
    }

    public function sendList(array $body): array
    {
        return $this->client->post('/messages/send-list', $body);
    }

    public function sendButtons(array $body): array
    {
        return $this->client->post('/messages/send-buttons', $body);
    }

    public function sendStatus(array $body): array
    {
        return $this->client->post('/messages/send-status', $body);
    }

    public function sendMediaAdvanced(array $body): array
    {
        return $this->client->post('/messages/send-media-advanced', $body);
    }

    public function sendPTV(array $body): array
    {
        return $this->client->post('/messages/send-ptv', $body);
    }

    public function sendSticker(array $body): array
    {
        return $this->client->post('/messages/send-sticker', $body);
    }

    public function getPollResults(string $pollId, array $params = []): array
    {
        return $this->client->get('/messages/poll/' . rawurlencode($pollId) . '/results', $params);
    }
}
