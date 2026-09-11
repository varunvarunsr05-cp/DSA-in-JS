//write a function to find the most frequently occuring number in an array

let nums=[1,2,2,6,6,6,66,6,6,3,3,3,4,4,5,5,5,5];

function frequentNum(nums){
    let freq={};
    let mFreq;
    nums.forEach(e => {
        freq[e]=(freq[e] || 0)+1;
        // console.log(freq);
    });
    for(let key in freq){
        let freqN=1;
        if (freq[key]>freqN) {
            freqN=freq[key]
            mFreq=key;
        }    
    }
    console.log(mFreq);
}

frequentNum(nums)
// function frequentNum(nums){
//     let count=0;
//     let obj={};
//     let freqNum;
//     let ferqNum1;

//     for (const num of nums) {
//         obj[num]=(obj[num] || 0)+1
//         if (obj[num]>count) {
//             count=obj[num];
//             freqNum=num;
//         }
//     }
//     for (const key in obj) {
//         if (obj[key]===count && key!==freqNum){
//             freqNum1=key;
//         }        
//     }
//     console.log(`fer1=${freqNum},fre2=${freqNum1}`)
// }

// console.log(frequentNum(nums))