import { NotificationAlertObserver } from "../Observer/NotificationAlertObserver";
import { StockObservable } from "./StockObservable";

export class IPhoneObservableImpl implements StockObservable {
    private observerList: NotificationAlertObserver[] = [];
    private stockCount: number = 0;
    
    add(observer: NotificationAlertObserver): void {
        this.observerList.push(observer);
    }

    remove(observer: NotificationAlertObserver): void {
        const observerIndex = this.observerList.indexOf(observer);
        if(observerIndex > -1) {
            this.observerList.splice(observerIndex, 1);
        }
    }

    notifySubscribers(): void {
        for(let observer of this.observerList) {
            observer.update();
        }
    }
    
    setStock(newStockAdded: number): void {
        if(this.stockCount === 0) {
            this.notifySubscribers();
        }
        this.stockCount += newStockAdded;
    }

    getStockCount(): number {
        console.log("iPhone is back in stock");
        return this.stockCount;
    }
    
    getMessage(): string {
        return "iPhone is back in stock";
    }

}
