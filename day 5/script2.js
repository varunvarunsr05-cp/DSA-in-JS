//write a function to count how many words are present in a sentance.

let sentence="  I  love  dd JS ok bye    ";

// function countWords(sentence){
//     let trimSentence=sentence.trim();
//     let splitSentence=trimSentence.split(" ");
//     let count=0;
//     console.log(splitSentence);

//     for (const word of splitSentence) {
//         if (word!=="") {
//             count++
//         }
//     }
//     return count;
// }

// function countWords(sentence){
//     return sentence.trim().split(/\s+/).length;
// }

function countWords(){
    return sentence.trim().split(/\s+/).length;
}

console.log(countWords(sentence));