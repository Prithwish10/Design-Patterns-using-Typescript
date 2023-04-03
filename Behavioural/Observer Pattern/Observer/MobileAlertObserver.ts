import { StockObservable } from "../Observable/StockObservable";
import { NotificationAlertObserver } from "./NotificationAlertObserver";

export class MobileAlertObserver implements NotificationAlertObserver {
    private mobileNumber: string;
    private observable: StockObservable;

    constructor(mobileNumber: string, observable: StockObservable) {
        this.mobileNumber = mobileNumber;
        this.observable = observable;
    }
    
    update(): void {
        this.sendMessage(this.mobileNumber, this.observable.getMessage())
    }

    sendMessage(mobilenumber: string, message: string) {
        // He we can use Twillio to send the message to the mobile number

        console.log("Message sent to: "+ mobilenumber+" => "+message)
    }
}