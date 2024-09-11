class staticclass{
    static wish:string="welcome";

    constructor() {
    //this.wish="hi";
}


static getWish():string{
    return this.wish;
}



}
//new staticclass().wish;
console.log('data mbr ====>',staticclass.wish);
console.log('member function===>',staticclass.getWish());