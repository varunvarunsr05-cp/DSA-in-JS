
// console.log("j")

// function findPal(){
//     let rev="";
//     for (let i = name.length-1; i >= 0; i--) {
//         console.log(name[i])
//         rev+=name[i]
//     }
//     console.log("palindrom is",rev===name)
// }
// findPal()

//         function palindrome(name){
//     let reverse="";

//     for (let i = name.length-1; i >=0 ; i--) {
//         // console.log(name[i]);
//         reverse+=name[i];
//     }
//     if (reverse===name) {
//         console.log("pal is",reverse===name)
//     }
//     else{
//         console.log("pal is",reverse===name)

//     }
//     console.log(reverse)
// }
// palindrome(name)

let name1 = "nayan"
// console.log(name1.length)

function checkPal(name1) {
    let rverse="";

    // console.log(name1)
    for (let i = name1.length-1; i >=0; i--) {
        rverse+=name1[i];
        // console.log(name1[i])
    }
    return rverse===name1;
}
console.log(checkPal(name1))
//     let reverse = "";

//     for (let i = name.length-1; i >= 0; i--) {
//         // console.log(name[i])
//         reverse+=name[i];
//     }
//     if(reverse==name){
//         console.log(`${name} is palindrome`)
//     }else{
//         console.log(`${name} is not palindrome`)
//     }
//     return reverse;
// }