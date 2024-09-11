function addNumbers(... num:number[]){
    var i;
    var sum:number=0;
    for(i=0;i<num.length;i++){
        sum=sum+num[i];
    }

    console.log('sum is',sum);

    
}

addNumbers(1,2,34,5);
addNumbers(1,2,34,5,9);
