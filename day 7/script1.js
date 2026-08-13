// write a function that finds the index of a given number in an array using linear search. otherwise return -1.

let arr=[1,2,4,5,3];

// console.log(arr.indexOf(3))

function findIndex(arr,num){
    let index;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===num) {
            index=i;
        }
    }
    if (index || index===0) {
        return index;
    }
    else{
        return -1
    }
}

console.log(findIndex(arr,3));