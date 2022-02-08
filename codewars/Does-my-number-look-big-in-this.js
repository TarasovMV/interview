function narcissistic(value) {
    const arr = value.toString().split('').map(x => +x);
    return arr.reduce((acc, next) => {
        return acc + Math.pow(next, arr.length)
    }, 0) === value;
}

console.log(narcissistic( 7 ));
