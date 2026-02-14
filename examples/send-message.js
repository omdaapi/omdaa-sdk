#!/usr/bin/env node
/**
 * Example: Send a text message via Omdaa API (Node.js)
 *
 * Run from repo root after install & build:
 *   make install   (or: cd packages/omdaa-js && npm install && npm run build)
 *   export OMDAA_API_KEY=your-api-key
 *   export OMDAA_TO=9665XXXXXXXX   # optional
 *   node examples/send-message.js
 *
 * Or from your project after: npm install omdaa-api-client
 */

const path = require('path');
let OmdaaClient, OmdaaError;
try {
  ({ OmdaaClient, OmdaaError } = require('omdaa-api-client'));
} catch {
  const localPath = path.resolve(__dirname, '../packages/omdaa-js/dist/index.js');
  ({ OmdaaClient, OmdaaError } = require(localPath));
}

const apiKey = process.env.OMDAA_API_KEY;
const to = process.env.OMDAA_TO || '966500000000';

if (!apiKey) {
  console.error('Set OMDAA_API_KEY then run the script again.');
  process.exit(1);
}

const client = new OmdaaClient({ apiKey });

async function main() {
  try {
    const res = await client.messages.sendText({
      sessionId: 'default',
      to,
      message: 'Hello from Omdaa SDK (Node.js)',
    });
    console.log('Sent successfully:', res.data?.messageId || res);
  } catch (err) {
    if (err instanceof OmdaaError) {
      console.error('API error:', err.status, err.message);
    } else {
      console.error(err);
    }
    process.exit(1);
  }
}

main();
