var classtwofinal = /** @class */ (function () {
    function classtwofinal(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return classtwofinal;
}());
var obj1finals = new classtwofinal("aa", "bb", "cc");
console.log('front end ', obj1finals.arg1, 'backend end ', obj1finals.arg2, 'db end ', obj1finals.arg3);
var obj1finals2 = new classtwofinal("aaa", "bbb", "ccv");
console.log('front end ', obj1finals2.arg1, 'backend end ', obj1finals2.arg2, 'db end ', obj1finals2.arg3);
