var staticclass = /** @class */ (function () {
    function staticclass() {
        //this.wish="hi";
    }
    staticclass.getWish = function () {
        return this.wish;
    };
    staticclass.wish = "welcome";
    return staticclass;
}());
//new staticclass().wish;
console.log('data mbr ====>', staticclass.wish);
console.log('member function===>', staticclass.getWish());
