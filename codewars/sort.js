function sortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        // if (array[i] % 2 === 0) continue;
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            // if (array[j] % 2 === 0) continue;
            if (array[j] < array[min]) {
                min = j;
            }
        }
        const tmp = array[min];
        array[min] = array[i];
        array[i] = tmp;
    }
    return array
}

console.log(sortArray([5,1,3,2]))
