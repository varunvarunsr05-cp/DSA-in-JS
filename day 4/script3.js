// Tough-Question: Write a function to check whether two arrays contain the same elements, regardless of their order.
// Example
// sameElements([1, 2, 3], [3, 2, 1]);
// Output
// true


// function sameElements(arr1, arr2) {
//   let isfalse=""

//   const freq = new Map();

//   for (const num of arr1) {
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }

//   for (const num of arr2) {
//     if (!(freq.has(num))){ 
//       isfalse+="false ";
//     }else {
//       isfalse+="true "
//     }

//   }
//   console.log(!((isfalse).includes("false")))

// }
//   let and="";
//   and+="true&&false";

let arr1 = [1, 2, 3, 7,4, 5, 4, 6];
let arr2 = [1, 2, 3,7, 5, 4, 8,6,6]
// sameElements(arr1,arr2);

function isSameElements(arr1, arr2) {
  // let sarr1=arr1.sort();
  // let sarr2=arr2.sort();
  // let countElements={}
  let bigArray = arr1;
  let smallArray = arr2;
  let result = "hey";

  if (bigArray.length < smallArray.length) {
    bigArray = [arr2];
    smallArray = [arr1];
    bigArray.forEach(e => {
      console.log(e)
      if (smallArray.includes(e)) {
        return result = smallArray.includes(e);
      } else return result = smallArray.includes(e);
    });
  } else {
    bigArray.forEach(e => {
      if (smallArray.includes(e)) {
        return result = smallArray.includes(e);
      } else return result = smallArray.includes(e);
    });
  }

  console.log(result)
  // console.log(sarr2)
}

isSameElements(arr1, arr2);
