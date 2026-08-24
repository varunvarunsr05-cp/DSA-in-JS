//write a function to find the smallest number in an array.

let arr=[6,88,9,0];
// arr.forEach(e => console.log(e))
// console.log(arr.)

function findSmallest(arr){
    let small=arr[0];

    for (const num of arr) {
        if (num<small) {
            small=num;
        }
    }
    return small;
}

console.log(findSmallest(arr));