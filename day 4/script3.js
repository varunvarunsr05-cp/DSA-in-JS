// Tough-Question: Write a function to check whether two arrays contain the same elements, regardless of their order.
// Example
// sameElements([1, 2, 3], [3, 2, 1]);
// Output
// true

let arr1=[1,1,3];
let arr2=[1,2];

// console.log(arr2.includes["4"]);

function isSameElements(arr1,arr2){
    let count=0;
    if (arr1.length!==arr2.length) {
        return false;
    }else{
    arr1.forEach(element1 => {
        arr2.forEach(element2 => {
            if (element1===element2) {
                count++;
                // console.log("true")
            }
        });
        // console.log(element);
    });
    }
    if (count===arr1.length && arr1.length) {
        return true;
    }else{
        return false;
    }
}

console.log(isSameElements(arr1,arr2))
