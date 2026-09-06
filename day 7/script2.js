// write a function that finds the index of a target number in sorted array using binary search.

let arr=[11,22,33,44,55]
// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if (arr[mid]===target) {
//             return mid;
//         }
//         if (arr[mid]<target) {
//             left=mid+1;
//         }else{
//             right=mid-1;
//         }
//     }
//     return -1;
// }

function binarySerach(arr,trgt){
    let left=0;
    let right=arr.length;

    while (left<right) {
        let mid=Math.floor((left+right)/2);
            if(trgt===arr[mid]){
                return mid;
            }else if (trgt<arr[mid]) {
                right=mid-1;
            }else{
                left=mid+1;
            }
    }
}

console.log(binarySerach(arr,55));
