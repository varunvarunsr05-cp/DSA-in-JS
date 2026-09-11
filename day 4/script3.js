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

// sameElements(arr1,arr2);

// function isSameElements(arr1, arr2) {
//   // let sarr1=arr1.sort();
//   // let sarr2=arr2.sort();
//   // let countElements={}
//   let bigArray = arr1;
//   let smallArray = arr2;
//   let result = "hey";

//   if (bigArray.length < smallArray.length) {
//     bigArray = [arr2];
//     smallArray = [arr1];
//     bigArray.forEach(e => {
//       console.log(e)
//       if (smallArray.includes(e)) {
//         return result = smallArray.includes(e);
//       } else return result = smallArray.includes(e);
//     });
//   } else {
//     bigArray.forEach(e => {
//       if (smallArray.includes(e)) {
//         return result = smallArray.includes(e);
//       } else return result = smallArray.includes(e);
//     });
//   }

//   console.log(result)
//   // console.log(sarr2)
// }
let arr1 = [2,3,5,4,6,7,8,9,10,11,12,13];
let arr2 = [2,3,5,4,6,7,8,9,10,11,13,12];

function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let sArr1 = arr1.sort((a, b) => a - b);
  let sArr2 = arr2.sort((a, b) => a - b);
  let yes=[];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(arr1[i])
      // console.log(arr2[i])
      // console.log("not same");
    } else {
      // console.log(arr1[i]);
      yes.push("yes");
      // console.log("yes same");
    }
  }
  // console.log(yes.length)
  // console.log(arr1.length)
  yes.length===arr1.length?console.log("yes"):console.log("NO")
}

console.log(isSame(arr1, arr2))
