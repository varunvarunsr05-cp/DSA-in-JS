// Moderate-Question: Write a function to find the longest word in a sentence.
// Example
// findLongestWord("I love learning JavaScript");
// Output
// "JavaScript"


// function longestWord(sentence){
//     let lword="";
//     let lengths=0;

//     // console.log(sentence.split(" "));
//     let Arr=sentence.split(" ");

//     for (const word of Arr) {
//         if (word.length>lengths) {
//             lengths=word.length
//             lword=word
//         }
//         // console.log(word.length);
//     }
//     console.log(`the longest word is, "${lword}" and its length is, "${lengths}"`)
// }

// longestWord(sentence)

let sentence="I love lea JavaScript bo";

function findLarge(sentence){
    let sentences=sentence.split(" ");
    let lrgWord=sentence[0];
    // console.log(sentences)
    sentences.forEach(e => {
        // console.log(e);
        if (e.length>lrgWord.length) {
             lrgWord=e;
        }
    });
    console.log(lrgWord);
}
findLarge(sentence);
// function findLrgWord(sentence){
//     let words=sentence.split(" ");
//     let lrgWord=words[0];

//     for(let word of words){
//         if (word.length>lrgWord.length) {
//             lrgWord=word;
//         }
//     }
//     console.log(lrgWord);
// }

// findLrgWord(sentence)

//write a function to sort an array without using the inbuilt functions.

// let Arr=[3,4,7,22,1,0,76,5,11]

// function sortArr(Arr){
//     let srtArr=[];
//     // let min=Arr[0];

//     for (let i = 0; i < Arr.length-1; i++) {
//         for (let j = i+1; j < Arr.length; j++) {
//             if (Arr[j]<Arr[i]) {
//                 let temp=Arr[i];
//                 Arr[i]=Arr[j]
//                 Arr[j]=temp;
//             }
//         }
//     }
//     console.log(Arr);
//     // console.log(srtArr);
//     // return srtArr;
// }
// sortArr(Arr)
