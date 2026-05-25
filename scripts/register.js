#!/usr/bin/env node
/**
 * Minimal LuisCore agent registration client — POST /api/agents on the public devnet.
 * Usage: LUISCORE_ORIGIN=https://luiscore.com node scripts/register.js
 */
const fs = require('node:fs');
const path = require('node:path');

const origin = (process.env.LUISCORE_ORIGIN || 'https://luiscore.com').replace(/\/$/, '');
const payloadPath = path.join(__dirname, '..', 'examples', 'register-agent.json');
const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

async function main() {
  const url = `${origin}/api/agents`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  console.log(`POST ${url} → ${res.status}`);
  console.log(typeof body === 'string' ? body : JSON.stringify(body, null, 2));
  if (!res.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
