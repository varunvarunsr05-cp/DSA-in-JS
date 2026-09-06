// const age=20;
// // age=23; cannot reassign to a constant
// console.log(age)

// const numbers=[1,2,3,4];
// numbers.push(5);//can change the contents
// console.log(numbers);
// // numbers=[6,7]; error:Assignment to constant variable

console.log("a");

setTimeout(()=>{
    console.log("b");
},[1000])

console.log("c");

//call-stack:keep tracking the functions.
//web-Apis:js uses for task that takes time which is provided by browser.
//calback-queve:functions are waiting ready to run.
//EventLoop:moves waiting functions into the call stack when it is free.
//call-stack:where js actauly runs the function.



// who monitors the 
//     i.call stack.
//     ii.callback queve.
//event loop manages both , chacks if the callstack is busy? and checks is there any call back queves are ready and waiting for to run.