
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

// function capFirstLetter(){
//     let words=str.split(" ");
//     // console.log(words);
//     let capitalize="";
//     for (const word of words) {
//         // console.log(word[0]);
//         capitalize+=word[0].toUpperCase()+word.slice(1);
//         capitalize+=" "
//     }
//     return capitalize
// }
let str = "hello world of dev javascript maam"
// console.log(str.toUpperCase());

function capFirstLetter(str) {
    let strWords = str.split(" ");
    let capStr = "";
    // console.log(strWords);
    strWords.forEach(e => {
        for (let i = 0; i < e.length; i++) {
            if (i===0) {
                capStr += e[i].toUpperCase()
            }else{
                capStr += e[i];
            }
        }
        capStr+=" ";
    });
    // console.log(capStr);
    return capStr;
}

console.log(capFirstLetter(str))