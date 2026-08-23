
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

let name = "gadag"
console.log(name.length)

function checkPal(name) {
    let reverse = "";

    for (let i = name.length-1; i >= 0; i--) {
        // console.log(name[i])
        reverse+=name[i];
    }
    if(reverse==name){
        console.log(`${name} is palindrome`)
    }else{
        console.log(`${name} is not palindrome`)
    }
    return reverse;
}
console.log(checkPal(name))