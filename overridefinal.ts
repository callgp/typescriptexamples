

 class class_oness{

    public doFunc():string{
        //console.log('mysql');
        return "mysql";
    }

    
}

class class_twoss extends class_oness{
    doFunc():string{
   // console.log('mevn stack');
   return "nosql";
}
}
class class_threess extends class_oness{
    doFunc():string{
        return super.doFunc();
    }
    
}


//let obj:class_twos=new class_twos;

console.log(new class_oness().doFunc())
console.log(new class_twoss().doFunc())
console.log(new class_threess().doFunc())