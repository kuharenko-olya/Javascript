//1.

function changeRegisterWords(word) {
    return word.toUpperCase();
}

console.log(changeRegisterWords('hello world'));

//2.
function findStrings(array) {
    let lengthStringsArray = [];
    array.forEach(item => {
        if (typeof item === 'string' && item !== '') {
            lengthStringsArray.push(item.length);
        }
    })
    return lengthStringsArray;
}

console.log(findStrings(['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123]));

// 3.
function countTheNumberOfVowels(string) {
    let vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
    let countVowels = 0;
    let lettersArray = string.split('');
    lettersArray.forEach(letter => {
        if (vowelsArray.includes(letter)) {
            countVowels++;
        }
    })
    return countVowels;
}

console.log(countTheNumberOfVowels('Hello world'));


//4.
function createUser(role, name) {
    return {role: role, name: name};
}

console.log(createUser('admin', 'Bob'));
//console.log(createUser('user', 'Alice'));

//5.
function printTheNumberOfLetters(data) {
    let lettersArray = data.split('');
    let foundedLetters = [];
    let result = "";
    lettersArray.forEach(letter => {
        if (!foundedLetters.includes(letter)) {
            const letterLength = lettersArray.filter(innerLetter => innerLetter === letter).length;
            foundedLetters.push(letter);
            result += letterLength + letter
        }
    })
    return result;
}

console.log(printTheNumberOfLetters('aabbbccccd'));

//6.
function countEvenAndOddNumbers(data) {
    const evenNumbers = data.filter(num => {
        return num % 2 === 0;
    })
    const countEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    const oddNumbers = data.filter(num => {
        return num % 2 === 1;
    })
    const countOddNumbers = oddNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    return `${countEvenNumbers}, ${countOddNumbers}`;
}

console.log(countEvenAndOddNumbers([1, 2, 3, 4, NaN, 0, 5, 10]));


//7.
function convert(currency, amount) {
    let rate = 1;
    switch (currency) {
        case 'US':
            rate = 36;
            break;
        case 'EUR':
            rate = 35;
            break;
    }
    let result = amount / rate;
    return result.toFixed(2)
}

console.log(convert('US', 1000));
console.log(convert('EUR', 1000));


//8.

function addSpace(string) {
    let arr = string.split('');
    return arr.map(elem => elem + ' ').join('');
}

console.log(addSpace('hello world'));


//9.
function getSeconds(years) {
    return years * 365 * 24 * 60 * 60;
}

console.log(getSeconds(5));


//10.
function trim(string, end) {
    const partOfText = string.slice(0, end);
    return partOfText.length < string.length ? partOfText + '...' : partOfText;
}
console.log(trim('hello world', 3));