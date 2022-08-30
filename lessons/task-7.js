//1.
const user = {
    name: 'Bob',
    sayHi: function () {
        console.log(`Hi I am ${this.name}`)
    }
}
user.sayHi()
//Hi I am Bob

const greetingsFunc = user.sayHi;
greetingsFunc()
// Hi I am undefined
const user2 = {
    name: 'Jane',
    sayHi: greetingsFunc
};
user2.sayHi()
// Hi I am Jane


//2.

function Pet(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;
}

let chinchilla = new Pet('Quick', 'chinchilla', 'black');
let dog = new Pet('Rex', 'dog', 'brown');
let cat = new Pet('Musya', 'cat', 'grey');
let parrot = new Pet('Gosha', 'parrot', 'green');

console.log(chinchilla);
console.log(dog);
console.log(cat);
console.log(parrot);

//3.

function calc(str) {
    if (str.length === 0) {
        return 0;
    }
    let firstChar = Number(str.charAt(0));
    let restString = str.slice(1);
    return firstChar + calc(restString);
}

let sum = calc('152092');
console.log(sum);


