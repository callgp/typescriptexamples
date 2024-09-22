interface interface1{
    mean():void;
}

interface interface2{
    mern():void;
}

abstract class class_onesssss implements interface2{

    public mean():void{
        console.log('mean statc');
    }

    public mern():void{
        console.log('mern statc');
    }

    abstract mevn():void;
}

class class_twosssss extends class_onesssss{
mevn():void{
    console.log('mevn stack');
}

}


let objssssss:class_twosssss=new class_twosssss;

objssssss.mean();
objssssss.mern();
objssssss.mevn();