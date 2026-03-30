import axios from "axios";
import { getConfig } from "../config/env";

export const sendToTelegram = async (text: string) => {
  const { token, chatId } = getConfig();

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  return axios.post(url, {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
  });
};