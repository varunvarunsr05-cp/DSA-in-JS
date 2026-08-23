
let str = "hello world of javascript"
// function capitalizeWord(str){
//     let words=str.split(" ")
//     let result=[];
//     let final="";


//     for (const word of words) {
//         result.push(word[0].toUpperCase()+word.slice(1))
//          final =result.join(" ");
//     }
//     console.log(final)
// }
// capitalizeWord(str)

function capFirstLetter(){
    let words=str.split(" ");
    // console.log(words);
    let capitalize="";
    for (const word of words) {
        // console.log(word[0]);
        capitalize+=word[0].toUpperCase()+word.slice(1);
        capitalize+=" "
    }
    return capitalize
}

console.log(capFirstLetter(str))