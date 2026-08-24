// Tough-Question: Write a function to check whether two arrays contain the same elements, regardless of their order.
// Example
// sameElements([1, 2, 3], [3, 2, 1]);
// Output
// true

// let arr1=[1,1,2];
// let arr2=[1,2];

// // console.log(arr2.includes["4"]);

// function isSameElements(arr1,arr2){
//     let count=0;
//     // if (arr1.length!==arr2.length) {
//     //     return false;
//     // }else{
//     arr1.forEach(element1 => {
//         arr2.forEach(element2 => {
//             if (element1===element2) {
//                 count++;
//                 // console.log("true")
//             }
//         });
//         // console.log(element);
//     });

//     if (count===arr1.length && arr1.length) {
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isSameElements(arr1,arr2))

function sameElements(arr1, arr2) {
  // if (arr1.length !== arr2.length) return false;
  let isfalse=""

  const freq = new Map();
  
  for (const num of arr1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    // console.log(num)
    if (!(freq.has(num))){ 
      isfalse+="false ";
      // console.log(freq.has(num))
    }else {
      // return true;
      isfalse+="true "
    }

    // freq.set(num, freq.get(num) - 1);

    // if (freq.get(num) === 0) freq.delete(num);
  }
  console.log(!((isfalse).includes("false")))

  // return freq.size === 0;
}
  let and="";
  and+="true&&false";

  // console.log(and.includes("&&&"))
 let arr1=[2, 1,3,4,4, 1];//must to be small or equal to arr2 in elelments
 let arr2=[1,1, 1,3,4,2,2]   //can be small big or eq elelments
// console.log(sameElements(arr1,arr2)); 
sameElements(arr1,arr2);
// console.log(sameElements([1, 1, 2], [1, 2, 2])); // false