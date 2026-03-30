# telegram-notify-lite (compact)

Tiny Telegram notification helper for Node and backend use.

## What it does

- `initTelegram({ token, chatId })` sets bot credentials.
- `sendMessage({ title, message, metadata? })` sends Telegram message.
- Uses Telegram API with `parse_mode: "HTML"` so you can rich-format output.

## Install

npm install telegram-notify-lite

## Quick usage

```ts
import { initTelegram, sendMessage } from "telegram-notify-lite";

initTelegram({
  token: process.env.TG_BOT_TOKEN || "your-token",
  chatId: process.env.TG_CHAT_ID || "your-chat-id"
});

await sendMessage({
  title: "Hello",
  message: "World"
});
```

## Example with metadata + HTML

```ts
await sendMessage({
  title: "í·¾ New Order",
  message: "<b>Order received</b>\nItem: Burger x2",
  metadata: {
    "Order ID": "123456",
    Delivery: "30m"
  }
});
```

## Notes

- Use env vars in production and do not bundle token in client-side code.
- For frontend frameworks, keep this server-side (API route) only.

