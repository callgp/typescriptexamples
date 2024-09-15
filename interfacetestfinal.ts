interface interface11{
    //techname:string="anglr"; //not allowed initializing
    techname:string;
}

class uiClass implements interface11{
    techname: string="ang";
  

}


//impl inteface through json

let obj111:interface11={
    techname: 'react'
}

let obj112:interface11={
    techname: "spring"
}

console.log('class level',new uiClass().techname);


console.log('json impl',obj111.techname);
console.log('json impl',obj112.techname);