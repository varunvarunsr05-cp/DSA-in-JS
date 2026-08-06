//write a function to find the most frequently occuring number in an array

let nums=[1,2,2,3,3,3,4,4,4,4];

function frequentNum(nums){
    let count=0;
    let obj={};
    let freqNum;
    let ferqNum1;

    for (const num of nums) {
        obj[num]=(obj[num] || 0)+1
        if (obj[num]>count) {
            count=obj[num];
            freqNum=num;
        }
    }
    for (const key in obj) {
        if (obj[key]===count && key!==freqNum){
            freqNum1=key;
        }        
    }
    console.log(`fer1=${freqNum},fre2=${freqNum1}`)
}

// console.log(frequentNum(nums))
frequentNum(nums)