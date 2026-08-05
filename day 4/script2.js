// Moderate-Question: Write a function to find the longest word in a sentence.
// Example
// findLongestWord("I love learning JavaScript");
// Output
// "JavaScript"

let sentence="I love learningaaa JavaScript";

function longestWord(sentence){
    let lword="";
    let lengths=0;

    // console.log(sentence.split(" "));
    let Arr=sentence.split(" ");

    for (const word of Arr) {
        if (word.length>lengths) {
            lengths=word.length
            lword=word
        }
        // console.log(word.length);
    }
    console.log(`the longest word is, "${lword}" and its length is, "${lengths}"`)
}

longestWord(sentence)