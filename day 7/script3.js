// given a sorted array containing duplicates numbers, find the first index at which a target number appears.
let arr=[11,22,22,33,33,44,55,66];
// let str="raam";

function firstOccur1(arr,tg){
    let ind=arr.indexOf(tg);
    console.log("method",ind);
}
firstOccur1(arr,444)

// let ind=arr.indexOf(333);
// console.log(ind);

// function firstOccur(arr,tg){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===tg) {
//             return i;
//         }else  return -1;
//     }
// }


// console.log(firstOccur(arr,444));
// function findFirstOccurence(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     let result=-1;

//     while(left<right){
//         let mid=Math.floor((left+right)/2);

//         if (arr[mid]==target) {
//             result=mid;
//             right=mid-1;
//         }else if(target<arr[mid]){
//             right=mid-1;
//         }else if (target>arr[mid]) {
//             left=mid+1;
//         }
//     }
//     return result;
// }

// console.log(findFirstOccurence(arr,44));