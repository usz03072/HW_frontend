let arr=[];

for(let i=0; i<100; i++){
    arr[i]=(Math.floor(Math.random()*(101-1))+1);
}

let arr2 = arr.filter(function (n) {
    return n % 2 != 0;
});

console.log(arr2);