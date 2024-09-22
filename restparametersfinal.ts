function addNumbers(... num:number[]){
var i;
var sum:number=0;
for(i=0;i<=num.length;i++){
    sum=sum+num[i];
}

console.log('sum,sum ',sum);
}
addNumbers(1,2,3,4,5,6);
addNumbers(1,2,3,4);