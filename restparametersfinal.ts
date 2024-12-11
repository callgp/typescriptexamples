function addNumbers(... nums:number[]){
var i;
var sum:number=0;
for(i=0;i<nums.length;i++){
    sum=sum+nums[i];
}

console.log('sum sum ',sum);
}
addNumbers(1,2,3,4,5,6);
addNumbers(1,2,3,4);