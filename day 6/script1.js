//write a function to remove all even numbers from an array and return a new array containing only odd numbers.

let arr=[1,2,3,4,5,6,7,8];

// method 1🤷‍♂️
// function removeEven(arr){
//     let oddArr=[];

//     for (const num of arr) {
//         if (num%2!==0) {
//             oddArr.push(num);
//         }
//     }
//     return oddArr;
// }


// method 2🫡
function removeEven(arr){
    let oddArr=[];
    arr.map((e)=>{ e%2!==0?oddArr.push(e):""})
    return oddArr;    
}



console.log(removeEven(arr))