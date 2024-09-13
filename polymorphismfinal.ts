class class_one_finalss{
    public my_funcss(arg1:number,arg2:number):void;
    public my_funcss(arg1:string,arg2:string):void;
    public my_funcss(arg1:boolean,arg2:boolean):void;
    
    public my_funcss(arg1:any, arg2:any){
        console.log('argument1 ',arg1);
        console.log('argument2 ',arg2);

    }
}


//let obj:class_one_finalss=new class_one_finalss();

new class_one_finalss().my_funcss(10,20);
new class_one_finalss().my_funcss("hi","all");
new class_one_finalss().my_funcss(true,false);
