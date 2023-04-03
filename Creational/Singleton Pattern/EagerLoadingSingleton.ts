class EagerLoadingSingleton {
    private static singleton: EagerLoadingSingleton = new EagerLoadingSingleton();

    private constructor() {}

    public static getInstance() {
        return EagerLoadingSingleton.singleton;
    }
}

(function() {
    const s1 = EagerLoadingSingleton.getInstance();
    const s2 = EagerLoadingSingleton.getInstance();

    if(s1 === s2) {
        console.log("Singleton");
    } else {
        console.log("Not a Singleton");
    }
})();