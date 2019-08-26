console.log(`Arrays`);

const indexAndPrint = (arr, index) => {
    console.log(arr[index])
}

const myArray = [1, 2, 8, `bee`, `last`, `first`];

indexAndPrint(myArray, 2);

const findGreg = (arr) => {
    const doesIncGreg = arr.includes(`Greg`)
    if (arr === `Greg`) {
       return(`Gred found`);
    } else {
        return(`Gred not found`);
    }
}

console.log(findGreg([`a`, `b`, `Greg`]));
console.log(findGreg([`a`, `b`, `c`]));

const isItAPalindrome = (str) => {
    const arrayFromString = str.split(``)
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join(``)
    if (str === opposite) {
        return true
    } else {
        return false
    }
}