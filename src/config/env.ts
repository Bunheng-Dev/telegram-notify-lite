let config: {
  token?: string;
  chatId?: string;
} = {};

export const setConfig = (newConfig: {
  token: string;
  chatId: string;
}) => {
  config = newConfig;
};

export const getConfig = () => {
  if (!config.token || !config.chatId) {
    throw new Error("Telegram config missing");
  }
  return config;
};