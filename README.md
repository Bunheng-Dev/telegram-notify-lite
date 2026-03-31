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
  title: "From Vite",
  message: "Hello via backend"
});
```
# Example Snapshot

> CODE
<img width="756" height="420" alt="image_2026-03-31_08-36-23" src="https://github.com/user-attachments/assets/877c46d1-7025-4219-a33e-51f855949011" />

> TELEGRAM
<img width="614" height="266" alt="IMG_9790 (3)" src="https://github.com/user-attachments/assets/82e637e9-fcef-48b9-9d11-1b6bb8465882" />

---

## Example with metadata + HTML

```ts
await sendMessage({
  title: "📢 New Order",
  message: "<b>Order received</b>\nItem: Burger x2",
  metadata: {
    "Order ID": "123456",
    Delivery: "30m"
  }
});
```
# Example Snapshot
> CODE
<img width="980" height="548" alt="image_2026-03-31_08-37-36" src="https://github.com/user-attachments/assets/7df07673-f629-42fd-b349-13e92305bd4c" />

> TELEGRAM
<img width="642" height="356" alt="IMG_9791 (2)" src="https://github.com/user-attachments/assets/4f0f2dd4-b1d8-4147-8404-0b93ab06b11c" />

---

## Notes

- Use env vars in production and do not bundle token in client-side code.
- For frontend frameworks, keep this server-side (API route) only.

