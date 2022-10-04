// 1.

function* getRandomNumbers(from, to) {
    for (let i = 0; i < 10; i++) {
        yield Math.floor(Math.random() * (to - from) + from);
    }
    return Math.floor(Math.random() * (to - from) + from);
}

let sequence = [...getRandomNumbers(1, 100)];
console.log(sequence);

// 2.

async function wakeUp() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('I woke up');
            resolve()
        }, 200);
    })
}

async function haveBreakfast() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('I had breakfast');
            resolve()
        }, 300);
    })
}

async function doYoga() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('I did yoga');
            resolve()
        }, 100);
    })
}

async function run() {
    await wakeUp();
    await haveBreakfast();
    await doYoga();
}
run();