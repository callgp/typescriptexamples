var staticfinal = /** @class */ (function () {
    function staticfinal() {
        //this.wish="hi";
    }
    staticfinal.getWish = function () {
        return this.wish;
    };
    staticfinal.wish = "well";
    return staticfinal;
}());
console.log('data mmr', staticfinal.wish);
console.log('data mmr', staticfinal.getWish());
//console.log(new class_twoss().doFunc())
//console.log(new class_threess().doFunc())
//let obj:class_twos=new class_twos;
