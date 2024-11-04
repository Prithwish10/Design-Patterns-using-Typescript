import { INotification } from "./INotification";

export class SMSNotification implements INotification {
  async send(recipient: string, message: string): Promise<void> {
    // Here, implement the logic to send an email.
    console.log(`Sending SMS to ${recipient}: ${message}`);
    // Simulated async behavior for sending email
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
