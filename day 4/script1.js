// Easy-Question: Write a function to count how many times a given number appears in an array.
// Example:
// countOccurrences([1, 2, 3, 2, 4, 2], 2);
// Output
// 3
let nums=[1,2,3,2,4,3,2,2];

function timesAppeared(nums,num){
    let count=0;
    for (const n of nums) {
        if (n===num) {
            count++;
        }
    }
    console.log(count)
    // console.log(n)
}

timesAppeared(nums,3)
