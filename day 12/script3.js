const { useState } = require("react");

const arr = [10, 20, 30, 40];
//use of find method on an array, returns "only one" "first occurence element" which satisfies the condition
console.log(arr.find(e => e > 10))

//use of findIndex on an array. returns "only one" "first occurence INDEX" which satisfies condition.
console.log(arr.findIndex(e => e > 20));

//using filter on array:returns an array based on a condition
console.log(arr.filter(e => e>20))

//* React strict mode-helps find potential bugs and unsafre patterns during developement by intentionally checking components more strictly "it doesn't affects production behaviour" *

//in react App
function App(){
    const [count, setcount] = useState(0);

    setcount(count+1);//causes repeated renders
    console.log(count);
}

App()