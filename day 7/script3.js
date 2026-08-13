// given a sorted array containing duplicates numbers, find the first index at which a target number appears.
let arr=[11,22,22,33,33,44,55,66];

function findFirstOccurence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1;

    while(left<right){
        let mid=Math.floor((left+right)/2);

        if (arr[mid]==target) {
            result=mid;
            right=mid-1;
        }else if(target<arr[mid]){
            right=mid-1;
        }else if (target>arr[mid]) {
            left=mid+1;
        }
    }
    return result;
}

console.log(findFirstOccurence(arr,44));