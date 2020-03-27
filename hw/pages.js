let studentCount = 31; //totalCount
let pageSize = 10; //countList

let totalPage = studentCount/pageSize;
if(studentCount % pageSize > 0) {
    totalPage++;
}
console.log(Math.floor(totalPage));
