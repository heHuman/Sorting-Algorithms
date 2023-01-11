function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = 1; j < array.length - i; ++j) {
            if (array[j - 1] > array[j]) {
                const largerElement = array[j - 1];
                array[j - 1] = array[j];
                array[j] = largerElement;
            }
        }
    }
    return array;
}

console.log(bubbleSort([2, 3, 5, 1, 5, 7, 2, 10, 8]));
console.log(bubbleSort([1]));
console.log(bubbleSort([]));
console.log(bubbleSort([5, 2]));
console.log(bubbleSort([5, 2, 3]));