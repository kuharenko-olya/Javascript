// 1.

let name = 'Bob';

function logName() {
    console.log(name);
}

console.log(logName());

// 2. Значение ниже

let num = 7;

function test() {
    let num = 8;
    console.log(num);
}

console.log(test());

// 3. 10 , потому что поиск переменной происходит сначала в самой функции а потом выше за ее пределами

// var a = 10
//
// function foo() {
//
//     console.log('a', a)
//
// }
//
//
// function bar() {
//
//     var a = 20;
//     console.log(a)
//     foo()
//
// }
//
// bar();


// 4. 20 -  потому что поиск переменной происходит в функции

var a = 10

function foo() {

    var a = 20

    console.log(a)

}

a = 30

foo()


//6.

function createCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());


// 5.
for (let i = 0; i <= 5; i++) {

    setTimeout(function () {

        console.log(i);

    }, 0)

}