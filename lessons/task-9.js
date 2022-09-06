//1.

const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
let set = new Set(numbersArray);
let uniqueArray = Array.from(set);
console.log(uniqueArray);

//2.

let userBob = {
    name: 'Bob'
};

let userJane = {
    name: 'Jane'
}
const greetUser = new Map();
greetUser.set(userBob, 'Hello Bob nice to see you');
greetUser.set(userJane, 'How your kids doing Jane?');
console.log(greetUser.get(userBob));
console.log(greetUser.get(userJane));

// 3.

let map = new Map();
map.set('product', 'apple');
map.set('sort', 'golden');


let cart = {
    product: 'apple',
    sort: 'golden',
};

function transform(param) {
    if (param instanceof Map) {
        return Object.fromEntries(param.entries());
    } else {
        return new Map(Object.entries(param));
    }
}

console.log(transform(map));
console.log(transform(cart));

