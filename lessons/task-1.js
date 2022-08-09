// 1.
const myName = 'Olya';
let name = 'Olya';
//myName = 'Kate';
name = 'Sasha';

//2.
let user;
let superUser;
let activeUsersList;
let isActiveUser;


//3.
let numbersArray = [1, 2, 3, 4, 5];
let apple = {
    price: 100,
    product: 'Apple',
    delivery: true,
    sort: 'Golden'
}

let world = 'мир';
let greeting = `Привет ${world}`;


//5.
let isAdmin = false;
let isSuperAdmin = true;
let isUnauthorized = false;

if (isAdmin) {
    console.log('Hello admin!');
} else if (isSuperAdmin) {
    console.log('Hello superadmin!');
} else if (isUnauthorized) {
    console.log('Hello unauthorized ');
} else {
    console.log('Hello user!');
}


let role = 'admin';

switch (role) {
    case 'admin':
        console.log('Hello admin!');
        break;
    case 'superadmin':
        console.log('Hello superadmin!');
        break;
    case 'user':
        console.log('Hello user!');
        break;
    case 'unauthorized':
        console.log('Hello unauthorized');
        break;
    default:
        console.log('default');
        break;
}

const result = (isAdmin) ? 'Hello admin' : (isSuperAdmin) ? 'Hello superadmin' :
    (isUnauthorized) ? 'Hello unauthorized' : 'Hello user';
console.log(result);


//6.
let isFruit = 'apple';
switch (isFruit) {
    case 'apple':
    case 'pear':
    case 'banana':
    case 'orange':
    case 'peach':
        console.log('It is fruit');
        break;
    default:
        console.log('It is vegetable');
        break;
}