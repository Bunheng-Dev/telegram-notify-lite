import { TelegramPayload } from "../types";

export const formatMessage = (payload: TelegramPayload) => {
  let meta = "";

  if (payload.metadata) {
    meta = Object.entries(payload.metadata)
      .map(([key, value]) => `<b>${key}:</b> ${value}`)
      .join("\n");
  }

  return `
<b>📢 ${payload.title}</b>

${payload.message}

${meta}
  `;
};