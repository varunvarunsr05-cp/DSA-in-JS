//write a function to find the intersection of two arrays common elements only, without duplicates.

let arr1=[1,2,3,4,4,8,8];
let arr2=[1,4,5,6,7,8];

console.log(arr1.includes(3))

function findCommon(arr1,arr2){
    let intersects=[];

    for (const num of arr1) {
        if(arr2.includes(num) && !intersects.includes(num)){
            intersects.push(num);
            // console.log(intersects);
        }
    }
    return intersects;
}

console.log(findCommon(arr1,arr2));