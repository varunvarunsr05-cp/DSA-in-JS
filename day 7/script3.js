// given a sorted array containing duplicates numbers, find the first index at which a target number appears.
let arr=[11,44,22,3,44,55,66,44,11];

function firstOccurence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1;

    while (left<=right) {
        let mid=Math.floor((left+right)/2);

        if (arr[mid]===target) {
            result=mid;
            right=mid-1; //keep searching left
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return result;
}

console.log(firstOccurence(arr,44))