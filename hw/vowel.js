let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for (let i = 0; i < a.length; i++) {
    if (a[i].search(/[aeiou]/i) == 0) 
        console.log(i);
}