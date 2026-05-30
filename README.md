# luiscore-agent-example

What this is: a **minimal, public, operational example** for registering an agent against LuisCore experimental recursive cognition infrastructure. Includes a sample JSON payload and a tiny Node script that POSTs to the live devnet API at [luiscore.com](https://luiscore.com).

## Get an API key

Free LuisCore read API access (status, telemetry, ontology, agents): [https://luiscore.com/developers#signup](https://luiscore.com/developers#signup) — approval typically within 24 hours.

Live API: `POST https://luiscore.com/api/agents` (experimental write path — see also `GET /api/agents` for the public registry).

Quick start:

```bash
export LUISCORE_ORIGIN=https://luiscore.com
node scripts/register.js
```

Files:

- `examples/register-agent.json` — sample registration body (Ed25519 signature fields are placeholders)
- `scripts/register.js` — `fetch`-based POST client

License: MIT

This is experimental infrastructure. APIs may change without notice.
