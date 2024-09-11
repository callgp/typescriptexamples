interface interface1{
    mean():void;
}

interface interface1{
    mern():void;
}

abstract class class_one implements interface2{

    public mean():void{
        console.log('mean statc');
    }

    public mern():void{
        console.log('mern statc');
    }

    abstract mevn():void;
}

class class_twos extends class_one{
mevn():void{
    console.log('mevn stack');
}

}


let obj:class_twos=new class_twos;

obj.mean();
obj.mern();
obj.mevn();