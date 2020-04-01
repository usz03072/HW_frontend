let arr=[];

for(let i=0; i<100; i++){
   arr[i]=(Math.floor(Math.random()*(101-1))+1);
}

arr.sort(function(a,b){
    return a-b;
})

console.log(arr);