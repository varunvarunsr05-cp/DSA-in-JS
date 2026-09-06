//destructauring means extract data from arrays or objects into individual var's

let numbers=[10,20,30,40];
// let a=numbers[0];
// let b=numbers[1];
// let c=numbers[3];

// console.log("a,b,c = ",a,b,c)

//above thing in one line
// let[a,b,c]=[10,20,30];
// console.log(a,b,c)

//ARRAY DESTRUCTARING.
const colors=["red","green","blue"];
// let [c1,c2,c3]=colors;
// console.log(c1,c2,c3);

//Skip unwanted
// let [c1, ,c3]=colors;
// console.log(c1,c3);

//default values
// let [c1, ,c3,c4="hell"]=colors;
// console.log(c1,c3,c4);

//SWAPPING VARIABLES
let x=5;
let y=10;
console.log(x,y);

[x,y]=[y,x];
console.log(x,y);