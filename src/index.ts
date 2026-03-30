import { sendToTelegram } from "./core/sender";
import { formatMessage } from "./core/formatter";
import { setConfig } from "./config/env";
import { TelegramPayload } from "./types";

export const initTelegram = setConfig;

export const sendMessage = async (payload: TelegramPayload) => {
  const message = formatMessage(payload);
  return sendToTelegram(message);
};