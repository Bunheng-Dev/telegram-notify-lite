import { sendMessage, initTelegram } from "../dist";

initTelegram({
  token: "YOUR_TOKEN",
  chatId: "YOUR_CHAT_ID",
});

sendMessage({
  title: "Test",
  message: "Hello from package 🚀",
});