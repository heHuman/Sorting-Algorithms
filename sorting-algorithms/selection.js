function selectionSorting(array) {
    for (let i = 0; i < array.length - 1; ++i) {
        let minimalInSubarray = array[i];
        let minimalElementIndex = i;
        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] < minimalInSubarray) {
                minimalInSubarray = array[j];
                minimalElementIndex = j;
            }
        }
        array[minimalElementIndex] = array[i];
        array[i] = minimalInSubarray;
    }
    return array;
}

console.log(selectionSorting([2, 3, 5, 1, 5, 7, 2, 10, 8]));
console.log(selectionSorting([1, 3, 5, 1, 5, 7, 2, 10]));
console.log(selectionSorting([1]));
console.log(selectionSorting([]));
console.log(selectionSorting([5, 2]));
console.log(selectionSorting([5, 2, 3]));