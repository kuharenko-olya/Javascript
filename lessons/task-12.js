let car = {
    startEngine() {
        console.log('Start engine');
    },
    openDoors() {
        console.log('Open doors');
    },
    drive() {
        console.log('Drive');
    },
    brake() {
        console.log('Brake');
    }
}

// 1 способ устаревший __proto__

// let lamborghini = {
//     __proto__: car,
// }


// lamborghini.openDoors = function () {
//     console.log('Open doors vertically');
// }
//
// lamborghini.startEngine = function () {
//     console.log('Start engine with button');
// }
//
//
// lamborghini.startEngine();
// lamborghini.openDoors();
// lamborghini.drive();
// lamborghini.brake();


// 2 cпособ Object.create

let lamborghini = Object.create(car);

lamborghini.openDoors = function () {
    console.log('Open doors vertically');
};


lamborghini.startEngine = function () {
    console.log('Start engine with button');
}


lamborghini.startEngine();
lamborghini.drive();
lamborghini.brake();
lamborghini.openDoors();

