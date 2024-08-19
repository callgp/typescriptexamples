/*
class==> collection of data member and member function
class encapsulation binding of data with data memebt and exposig data to outside workd through member functions
*/
class class1{

    private uiTech:string;
    private backEnd:string;
    private db:string;

    constructor(){
        this.uiTech="angular";
        this.backEnd="sing";
        this.db="db2";


    }

    public getUiTech():string{
        return this.uiTech;
    }

    public getBackend():string{
        return this.backEnd;
    }
    public getDB():string{
        return this.db;
    }



}
var obj:class1=new class1();//creating obh of class1

console.log('ui tech ===>', obj.getUiTech());
console.log('bakend tech ===>', obj.getBackend());
console.log('db tech ===>', obj.getDB());
