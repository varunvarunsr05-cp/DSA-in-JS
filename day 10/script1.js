//shallow copy and deep copy
//shallow -means a obj when assigned to another its takes both data and the location "threfore changing in properts in copied obh reflexes on real obj";
//deep copy -its opposite we provide only data with {...} operator so the reflexes not reflects

const abc={
    name:"tom",
    age:12,
}
const klm={...abc}//deep assign
console.log("klm bef change",klm)
klm.age=22;
console.log("klm afte change",klm)
console.log("abc not change",abc)
console.log("abc obj=",abc)
const xyz=abc;//shallow assign
console.log("xyz obj=",abc)

xyz.name="jerry";
console.log("shallo copy abc obj=",abc)
console.log("xyz obj=",abc)
