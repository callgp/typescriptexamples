class polymorphism{

 public my_func(arg1: number, arg2:number) :void;
 public my_func(arg1: string, arg2:string) :void;
 public my_func(arg1: boolean, arg2:boolean) :void;
 public my_func(arg1:any, arg2:any):void{
    console.log('Arg1===>',arg1);
    console.log('Arg2===>',arg2);

 }
}

//let obj:class_one=new class_one()

new polymorphism().my_func(10,20);

new polymorphism().my_func("aa","bb");

new polymorphism().my_func(true,false);