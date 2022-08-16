const usersArray = [
    {
        name: "John",
        balance: '2000$',
        friends: [
            {
                name: "Robert",
                balance: '1000$',
            },
            {
                name: "Kate",
                balance: '0$',
            },
        ],
    },
    {
        name: "Isaac",
        balance: '20000$',
        friends: [
            {
                name: "Bob",
                balance: '2000$',
            },
            {
                name: "Robert",
                balance: '150000$',
            },
        ],
    },
    {
        name: "Jane",
        balance: '200$',
        friends: [
            {
                name: "Kate",
                balance: '5000$',
            },
            {
                name: "Anne",
                balance: '1234$',
            },
            {
                name: "Bob",
                balance: '300$',
            },
        ],
    },
    {
        name: "Russell",
        balance: '100$',
        friends: [],
    },
];


// 1.
if (usersArray.length > 0) {
    let theRichestUser = usersArray[0];
    usersArray.filter(user => {
        if (parseFloat(user.balance) > parseFloat(theRichestUser.balance)) {
            theRichestUser = user;
        }
    })
    console.log("Task 1", theRichestUser.name);
}


//2.
usersArray.sort((user1, user2) => user1.name > user2.name ? 1 : -1);
console.log("Task 2", usersArray);

//3.
let initialValue = 0;
let totalBalance = usersArray.reduce(function (accumulator, currentValue) {
    return accumulator + parseFloat(currentValue.balance);
}, initialValue)
console.log("Task 3", totalBalance)


// 4.
// cоздаем клон массива чтобы не испортить начальные данные
let newArray = usersArray.slice();
newArray.pop();
console.log("Task 4", newArray);

//5.
newArray.splice(newArray.findIndex(user => user.name === 'Isaac'), 1);
console.log("Task 5", newArray);

//6.
newArray.splice(2, 0, {name: 'Harry', balance: '150$', friends: []});
console.log("Task 6", newArray);

//7.
newArray.push({name: 'Conor', balance: '80$', friends: []});
console.log("Task 7", newArray);

//8.
let usersNames = [];
// вариант 1 перед пушем делаем проверку на уникальность
usersArray.map(user => {
    if (!usersNames.includes(user.name)) {
        usersNames.push(user.name)
    }
    user.friends.map(friend => {
        if (!usersNames.includes(friend.name)) {
            usersNames.push(friend.name)
        }
    })
})
console.log("Task 8.1", usersNames);

// вариант 2 удаляем дубликаты после того как собрали все имена
usersArray.map(user => {
    usersNames.push(user.name)
    user.friends.map(friend => {
        usersNames.push(friend.name)
    })
})
let uniqueNames = [];
usersNames.forEach(function (name) {
    if (uniqueNames.indexOf(name) === -1) {
        uniqueNames.push(name);
    }
});
console.log("Task 8.2", uniqueNames);

// //9.
const users = usersArray.filter(user => parseFloat(user.balance) > 2000);
console.log(users);

//10.
if (usersArray.length > 0) {
    let max = usersArray[0];
    usersArray.forEach(user => {
        if (parseFloat(user.balance) > parseFloat(max.balance)) {
            max = user;
        }
        user.friends.forEach(friend => {
            if (parseFloat(friend.balance) > parseFloat(max.balance)) {
                max = friend;
            }
        })
    })
    console.log(max.name);
}


//11.

// 12.
const arr1 = [10, 'a', '5', 5, 1];
const arr2 = [10, 'a', 5, 5, 1];

let isEquals = false;

for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) {
        isEquals = false;
        break
    } else {
        isEquals = true;
    }
}
console.log(arr1 === arr2);


// 13.
let str = 'искать такси';
console.log(str.replace(' ', '') === str.replace(' ', '').split('').reverse().join(''));
str = 'привет мир';
console.log(str.replace(' ', '') === str.replace(' ', '').split('').reverse().join(''));



