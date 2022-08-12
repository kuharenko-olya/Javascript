//1.
let string = 'Hello world';
let wordsArray = string.split(' ');
for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substr(1);
}
let result = wordsArray.join(' ') + '!';
console.log(result);

//2.
let str = 'a123';
let arr = str.split('');
let resultLog = [];
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        resultLog.push('string');
    } else {
        resultLog.push('number');
    }
}
console.log(resultLog.join(', '));

//3.
for (let i = 13; i >= 3; i--) {
    if (i % 2) {
        console.log(i, 'odd');
    } else {
        console.log(i, 'even');
    }
}


let i = 13;
while (i >= 3) {
    if (i % 2) {
        console.log(i, 'odd');
    } else {
        console.log(i, 'even');
    }
    i--;
}
