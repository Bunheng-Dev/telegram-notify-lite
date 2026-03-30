# telegram-notify-lite

A tiny Telegram notification helper for Node/Server and front-end apps.

## Features

- `initTelegram({ token, chatId })` to set credentials
- `sendMessage({ title, message })` to send a notification
- Works with `process.env` for dotenv/production setup
- Typed in TypeScript (with `@types/node` support)

## Setup

1. Install

```bash
npm install telegram-notify-lite
npm install --save-dev typescript @types/node
```

2. Set env vars in `.env` (recommended for local dev + prod)

```ini
TG_BOT_TOKEN=your-token
TG_CHAT_ID=your-chat-id
```

> Note: These names are used in examples below. If using Vite React, use `VITE_TG_BOT_TOKEN` and `VITE_TG_CHAT_ID` in `.env`.

3. Or provide with explicit values (not recommended in production)

```bash
export TG_BOT_TOKEN="your-token"
export TG_CHAT_ID="your-chat-id"
```

4. In Node

```js
import { initTelegram, sendMessage } from "telegram-notify-lite";

initTelegram({
  token: process.env.TG_BOT_TOKEN || "token",
  chatId: process.env.TG_CHAT_ID || "chat"
});

await sendMessage({ title: "hello", message: "world" });
```

## Local build (this repo)

```bash
npm install
npm run build
```

## Test script

`test/index.ts`

```ts
import { sendMessage, initTelegram } from "../dist";

initTelegram({
  token: "TOKEN",
  chatId: "CHAT_ID",
});

sendMessage({
  title: "Test",
  message: "Hello from package 🚀",
});
```

Run with ts-node:

```bash
npm install --save-dev ts-node
npx ts-node test/index.ts
```

Or compile and run JS:

```bash
npm run build
node test/index.js
```

## React + Vite usage

1. Create Vite React app:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

2. Install package:

```bash
npm install telegram-notify-lite
```

3. Add `.env` (or `.env.local` for Vite) variables:

```ini
VITE_TG_BOT_TOKEN=your-token
VITE_TG_CHAT_ID=your-chat-id
```

4. Use in a component (front-end trigger via your backend)

In React, do *not* call Telegram API directly from browser. Instead call your own API endpoint and from back-end trigger `initTelegram/sendMessage` there.

Example UI side:

```tsx
const handleSend = async () => {
  await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "From Vite", message: "Hello" })
  });
};
```

## Next.js (full-stack) notes

- Next.js has both server-side and client-side parts.
- Put `telegram-notify-lite` calls in API route (or `server` functions) only.
- Do not import or use directly in browser bundles.
- Example API route (`/pages/api/send.ts` or `app/api/send/route.ts`):

```ts
import { initTelegram, sendMessage } from "telegram-notify-lite";

initTelegram({
  token: process.env.TG_BOT_TOKEN!,
  chatId: process.env.TG_CHAT_ID!
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  await sendMessage({ title: req.body.title, message: req.body.message });
  res.status(200).json({ ok: true });
}
```

## Better message UI (HTML formatting)

The package sends messages in Telegram using `parse_mode: "HTML"`, so you can use HTML formatting and emojis.

Example payload:

```ts
await sendMessage({
  title: "🧾 New Order",
  message: `👤 Customer: <b>John</b>\n🍔 Item: <b>Burger x2</b>\n💰 Total: <b>$12</b>`,
  metadata: {
    "Order ID": "123456",
    "Delivery": "30m"
  }
});
```

Or if you prefer a full block:

```ts
const text = `\n<b>🧾 New Order</b>\n\n👤 Customer: John  \n🍔 Item: Burger x2  \n💰 Total: $12`;
await sendMessage({ title: "Order Notification", message: text });
```

Supported tags:
- `<b>bold</b>`
- `<i>italic</i>`
- `<code>monospace</code>`
- `<a href="URL">link</a>`

## tsconfig instructions

Make sure `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node"],
    "ignoreDeprecations": "6.0"
  },
  "include": ["src"]
}
```

## Extra notes

- For server code, keep secrets in env vars; never bundle token in client-side assets.
- For development, use `.env` with `dotenv` (already in working repo settings).