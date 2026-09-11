// <!-- Tough qn- write a function to check whether two strings are anagrams or not -->

// console.log("hi")
let str1 = "veviell";
let str2 = "villaev";
let arr=[1,3,4]
// arr.so

// console.log(str1.sort())

let conts = str2.includes("")
let ord1 = "";

function isAnagrams(str1,str2){
    let count=0;
    let result;
    console.log("1=",str1,"2=",str2)
    if (str1.length!==str2.length) return console.log("lenghtn is not equals so not anagrams");

    let srt=str1.split("").sort().join("");
    for (const e of str1) {
        str2.includes(e)&&count++;
        count==str1.length?result="yes anagrams":result="not  anagrams";
    }
    console.log(srt);
    // });
    console.log(result);
}

// console.log(isAnagrams(str1, str2));
isAnagrams(str1, str2)
// let istrue=true&&true&&true;
// console.log(istrue)

// function isAnagrams(str1, str2) {
//     let ord2 = str2.split("").sort().join("");
//     let ord1 = str1.split("").sort().join("");
//     let isTrue;
//     // console.log(ord1)
//     if (str1.length === str2.length) {
//         for (const char of ord1) {
//             if (!(ord2.includes(char))) {
//                 console.log("not contains", char)
//             }
//             else{
//                 console.log("yes anagrams")
//             }
//         }
//     }else{
//         console.log("not anagrams")
//     }
// }

// function iscontains(){
//     let nstr="";
//     for (const char of str1) {
//         console.log(`"${char}"`);
//         let ifContain=str2.includes(char)
//         console.log(ifContain)
//         if (ifContain) {
//             nstr+=char;
//         }
//     }
//     if (nstr.length===str2.length) {
//         console.log(`🫡"${nstr}" contains all chars of "${str2}"  with a equal no. of ${nstr.length} letters`);
//         // console.log(nstr)
//     }
//     else{
//         console.log(`❌"${nstr}" are the only matching chars of "${str2}" `);
//     }
// }
// iscontains()
// console.log(conts)
// console.log(str1==str2)
