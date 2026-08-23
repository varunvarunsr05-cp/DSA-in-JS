// <!-- easy qn-write a function to find second largest number in an array -->

// let nums=[6,7,44];
//     // nums[0]=90;
//     let word="hello, i am , raj"

// //    console.log(nums.indexOf(20))

//    function index(nums,max){
//     let index=nums.indexOf(max)
//     nums[index]=0;
//    }

//     function findMax(nums){
//         let max=nums[0];
//         let max1=nums[0];

//         for (const num of nums) {
//             if (num>max) {
//                 max=num;
//             }
//         }

//         for (const num of nums) {
//             if (num>max1 && num!==max) {
//                 max1=num;
//             }
//         }
//         console.log(max1)
//     }
//     // findMax(nums1)
//     findMax(nums)
let nums = [6,5,4,7];

function secLargNum(nums){
    let larg=nums[0];
    let secLarg=-Infinity;

    for (const num of nums) {
        if (num>larg) {
            secLarg=larg;
            larg=num;
        }
    }
    console.log("sec large num is",secLarg,"first larg num is",larg)
}
secLargNum(nums);
// function secondLargest(nums){
//     let max=nums[0];
//     let second=-Infinity;

//     for (const num of nums) {
//         if (num>max) {
//             second=max;
//             max=num;
//         }
//         else if (num>second && num!==max) {
//             second=num;
//         }
//     }
//     console.log(second);
// }

// secondLargest(nums)
