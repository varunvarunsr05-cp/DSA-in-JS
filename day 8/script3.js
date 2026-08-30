// merge two sorted array

function mergeSorted(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    

    // while (i <arr1.length && j <arr2.length) {
        // console.log(arr1[i])
        // if (arr1[i] < arr2[j]) {
        //     console.log("arr1",arr1[i]);
        //     result.push(arr1[i]);
        //     i++;
        // } else {
        //     console.log('arr2',arr2[j]);
        //     result.push(arr2[j]);
        //     j++;
        // }
        arr1.forEach(e =>{
            arr2.forEach(f=>{
                // console.log(e)
                if (e<f) {
                    result.includes(e)?'':result.push(e)
                }
                else{
                    // result.push(f);
                    result.includes(f)?'':result.push(f)
                }
            })
        })
        arr1.forEach(e => {
            if (!(result.includes(e))) {
                result.push(e);
            }
        });
        arr2.forEach(e => {
            if (!(result.includes(e))) {
                result.push(e);
            }
        });
        return result;
    }


    // Add remaining elements
    // while (i < arr1.length) {
    //     result.push(arr1[i]);
    //     console.log(arr1[i]);
    //     i++;
    // }
    
    // while (j < arr2.length) {
    //     result.push(arr2[j]);
    //     console.log(arr1[j]);
    //     j++;
    // }

// }

console.log(mergeSorted([1, 3, 5, 8,9,12], [2, 4, 6, 7,10,11,77]));
// [1, 2, 3, 4, 5, 6, 7, 8]