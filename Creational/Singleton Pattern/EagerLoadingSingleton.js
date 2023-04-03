var EagerLoadingSingleton = /** @class */ (function () {
    function EagerLoadingSingleton() {
    }
    EagerLoadingSingleton.getInstance = function () {
        return EagerLoadingSingleton.singleton;
    };
    EagerLoadingSingleton.singleton = new EagerLoadingSingleton();
    return EagerLoadingSingleton;
}());
(function () {
    var s1 = EagerLoadingSingleton.getInstance();
    var s2 = EagerLoadingSingleton.getInstance();
    if (s1 === s2) {
        console.log("Singleton");
    }
    else {
        console.log("Not a Singleton");
    }
})();
var ar = [1, -2, 4, "asd", NaN, undefined, 0];
var res = ar.filter(function (ele) {
    return typeof ele === 'number';
});
console.log(res);
// let a = 0;
// console.log(isNaN(a))
