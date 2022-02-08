var moveZeros = function (arr) {
    const newArr = arr.filter(x => x !== 0);
    return [...newArr, ...[...new Array(arr.length - newArr.length)].map(() => 0)];
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
