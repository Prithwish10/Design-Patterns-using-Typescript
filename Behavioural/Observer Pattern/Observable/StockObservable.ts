import { NotificationAlertObserver } from "../Observer/NotificationAlertObserver";

export interface StockObservable {
  add(observer: NotificationAlertObserver): void;

  remove(observer: NotificationAlertObserver): void;

  notifySubscribers(): void;

  setStock(newStockAdded: number): void;

  getStockCount(): number;

  getMessage(): string;
}
