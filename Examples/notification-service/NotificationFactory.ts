import { EmailNotification } from "./EmailNotification";
import { INotification } from "./INotification";
import { NotificationType } from "./NotificationType";
import { SMSNotification } from "./SMSNotification";
import { WhatsappNotification } from "./WhatsappNotification";

export class NotificationFactory {
  static createNotification(type: NotificationType): INotification {
    switch (type) {
      case NotificationType.EMAIL:
        return new EmailNotification();
      case NotificationType.SMS:
        return new SMSNotification();
      case NotificationType.WHATSAPP:
        return new WhatsappNotification();
      default:
        throw new Error(`Notification type ${type} not supported.`);
    }
  }
}
