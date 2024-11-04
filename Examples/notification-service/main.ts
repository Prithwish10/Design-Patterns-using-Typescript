import { NotificationService } from "./NotificationService";
import { NotificationType } from "./NotificationType";

(async () => {
  const notificationService = new NotificationService();
  await notificationService.sendNotification(
    NotificationType.EMAIL,
    "user@example.com",
    "Welcome to our service!"
  );
})();
