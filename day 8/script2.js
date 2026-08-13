// Selection sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([7, 4, 9, 2, 5]));
// [2, 4, 5, 7, 9]