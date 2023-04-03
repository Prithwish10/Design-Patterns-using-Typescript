import { SingleTon } from "./Singleton";

class Main {
    main(): void {
        const singleton1 = SingleTon.getInstance();
        const singleton2 = SingleTon.getInstance(); 

        if(singleton1 === singleton2) {
            console.log("Singleton");
            console.log(singleton1);
        } else {
            console.log("Not a Singleton")
        }
    }
}

const main = new Main();
main.main();