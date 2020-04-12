let count=0;

let id = setInterval(function(){
    count++;
    console.log("1초 간격", new Date())

    if(count==10){
        clearInterval(id)
    }
}, 1000)