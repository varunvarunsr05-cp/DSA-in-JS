//write a function to count how many words are present in a sentance.

let sentence="  I  love  dd JS ok bye    ";
// sentence.forEach(e => console.log(e))


// function countWords(){
    // return sentence.trim().split(/\s+/).length;
// }
function countWords(sentence){
    let words="";
    let count=0;
    let sentence1=sentence.trim().split(" "||"  ");

    sentence1.forEach(e => {
        console.log(e);
        count++;
        // console.log(e);
        words+=e+"";
    });
    return count;
}

console.log(countWords(sentence));