let persons1 = [];

for (let i=0; i<10; ++i) {
        persons1.push({name:"홍길동", age:16+i})
}

let persons2 = JSON.parse(JSON.stringify(persons1))

console.log(persons2)
console.log(persons1==persons2) //확인용 코드