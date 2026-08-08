//write a function to find the first repeating character in a string.

let str="acab";


function firReapChar(str){
    let repeat="";

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (str[i]===str[j] && !repeat) {
                repeat=str[i];
            }
        }        
    }
    return repeat;
}

console.log(firReapChar(str))