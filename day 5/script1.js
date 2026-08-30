//write a function to find the smallest number in an array.

let arr=[6,88,9,5,6];

function findSmallest(arr){
    let small=arr[0];

    arr.forEach(e => {
        if (e<small) {
        return small=e;
       } 
    });
    return small;
}

// function findSmallest(arr){
//     let small=arr[0];

//     for (const num of arr) {
//         if (num<small) {
//             small=num;
//         }
//     }
//     return small;
// }

console.log(findSmallest(arr));