//closure function :"inner()" remembers the count variable even afetr "outer()" has finished.

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

function outer(){
    let count=0;

    return function inner(){
        count++
        console.log(count);
    }
}

const counter = outer();
// console.log(outer())
// counter()
// counter()
// counter()
counter()

let arr=[9,3,4,2,8,33,2,0];

console.log(arr.sort((a,b)=>b-a))

