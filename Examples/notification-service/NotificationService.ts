import { NotificationFactory } from "./NotificationFactory";
import { NotificationType } from "./NotificationType";

export class NotificationService {
    async sendNotification(type: NotificationType, recipient: string, message: string) {
        const notification = NotificationFactory.createNotification(type);
        await notification.send(recipient, message);
    }
}