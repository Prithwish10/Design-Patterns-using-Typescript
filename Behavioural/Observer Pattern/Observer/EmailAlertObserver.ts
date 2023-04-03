import { StockObservable } from "../Observable/StockObservable";
import { NotificationAlertObserver } from "./NotificationAlertObserver";

export class EmailAlertObserver implements NotificationAlertObserver {
    private emailId: string;
    private observable: StockObservable;

    constructor(emailId: string, observable: StockObservable) {
        this.emailId = emailId;
        this.observable = observable;
    }
    
    update(): void {
        this.sendEmail(this.emailId, this.observable.getMessage());
    }
    
    sendEmail(emailId: string, message: string) {
        console.log("Email sent to: "+ emailId+" => "+message)
    }
}