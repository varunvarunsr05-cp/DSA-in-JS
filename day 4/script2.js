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

let sentence="I love lear JavaScript booooooooooooo";

function findLrgWord(sentence){
    let words=sentence.split(" ");
    let lrgWord=words[0];

    for(let word of words){
        if (word.length>lrgWord.length) {
            lrgWord=word;
        }
    }
    console.log(lrgWord);
}

findLrgWord(sentence)
