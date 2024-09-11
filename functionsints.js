function calculate_discount(price, discound) {
    if (discound === void 0) { discound = 0.5; }
    var discount = price * discount;
    console.log('actual proce===>', price);
    console.log('discount proce===>', price - discount);
}
calculate_discount(1000);
calculate_discount(10000, 0.4);
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
