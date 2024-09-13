

 class staticfinal{
static wish:string="well"
   constructor(){
    //this.wish="hi";
   }
   
   static getWish():string{
    return this.wish;
   }

  // getWishs():string{
  //  return this.wish;
 //  }
}


console.log('data mmr', staticfinal.wish);
console.log('data mmr', staticfinal.getWish());
//console.log(new class_twoss().doFunc())
//console.log(new class_threess().doFunc())



//let obj:class_twos=new class_twos;

