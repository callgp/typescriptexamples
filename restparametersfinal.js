function addNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i <= num.length; i++) {
        sum = sum + num[i];
    }
    console.log('sum,sum ', sum);
}
addNumbers(1, 2, 3, 4, 5, 6);
addNumbers(1, 2, 3, 4);
