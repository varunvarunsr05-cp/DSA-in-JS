//map,filter and reduce methods on Arrays and is most important data Structaures

//map with Array.
let Arr=[1,2,3,4,5,6,9,11,10,13,12];
// console.log(Arr.map((e)=>e*2));
// let Arr1=Arr.map((e)=>e*2)
// console.log(Arr1);

//map with Realworld example
let users=[
    {name:"Abhinav",age:22},
    {name:"Priya",age:26},
    {name:"Rahul",age:18},
    {name:"Rahul",age:15}
]//.map(e => console.log(e.age));

// let names=users.map(e=>(e.name))
// console.log(names)

//the filter() method.
// let evens=Arr.filter(e=>e%2!==0)
// console.log(evens);

//filter with real world example
// let Adults=users.filter((e)=>(e.age>=18));
// console.log(Adults);

//reduce() method.
// let nArr=[1,2,3,4];
// console.log(nArr.reduce((acc,e)=>acc*e))

//recursion to find the fibonacci of num
// function fibo(n){
//     if (n===1 || n===0) {
//         return 1;
//     }
    
//     return n*fibo(n-1);
// }

// console.log(fibo(5));

//problem 
let numbers=[1,2,3,4,5,6,7,8,10];
//step 1:double each number
//step 2:keep only numbers greater than 10
//step 3:find the total sum.

// let result=numbers
//         .map(e=>e*2).filter(e=>e>10).reduce((acc,e)=>acc+e);
// console.log(result);