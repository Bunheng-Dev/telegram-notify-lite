export interface TelegramPayload {
  title: string;
  message: string;
  metadata?: Record<string, any>;
}