export interface INotification {
  send(recipient: string, message: string): Promise<void>;
}
