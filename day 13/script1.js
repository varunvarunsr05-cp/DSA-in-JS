//diff b/n map and reduce
let arr=[1,2,3,4,5];

// map-reades an new array with applying our consition or operation.
let arr2=arr.map(e=>e*2)
console.log(arr2);

//reduce works on two parameters one is accumulatot another one is element.
let sum=arr.reduce((e,acc)=>acc+e)
console.log(sum)

//map reades new array by performing an operation on old array.
let _3x=arr.map(e =>e*3);
console.log(_3x)