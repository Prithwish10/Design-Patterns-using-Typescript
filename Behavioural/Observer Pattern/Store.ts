import { IPhoneObservableImpl } from "./Observable/IPhoneObservableImpl";
import { MobileAlertObserver } from "./Observer/MobileAlertObserver";

class Store {
    public static main(): void {
        const iPhoneObservable = new IPhoneObservableImpl();

        const mobileAlertObserver1 = new MobileAlertObserver("9134518546", iPhoneObservable);
        const mobileAlertObserver2 = new MobileAlertObserver("9087760912", iPhoneObservable);
        const emailAlertObserver1 = new MobileAlertObserver("abc@gmail.com", iPhoneObservable);

        iPhoneObservable.add(mobileAlertObserver1);
        iPhoneObservable.add(mobileAlertObserver2);
        iPhoneObservable.add(emailAlertObserver1);

        iPhoneObservable.setStock(10);
    }
}

Store.main();