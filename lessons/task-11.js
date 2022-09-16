// 1.
function sayHiUser(name, delay) {
    let [time, value] = delay.split(' ')
    let timeout = 0;

    switch (value) {
        case 'second':
        case 'seconds':
            timeout = time * 1000;
            break;
        case 'minute':
        case 'minutes':
            timeout = time * 60 * 1000;
            break;
        case 'hour':
        case 'hours':
            timeout = time * 60 * 60 * 1000;
            break;
    }

    setTimeout(function () {
        console.log(`Hello ${name}`);
    }, timeout);
}

sayHiUser('Olya', '6 second');


// 2.
function serializeOrUnserialize(object) {
    try {
        if (typeof object === 'string') {
            return JSON.parse(object);
        }
        if (typeof object === 'object') {
            return JSON.stringify(object);
        }
    } catch (e) {
        throw 'String is not an JSON string';
    }

    return object;
}

// const string = "test";
const string = { q: 1 };
// const string = "{\"q\":1}";
console.log(serializeOrUnserialize(string));


// 3.
function isJsonString(string) {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
}

// const jsonString = "test";
const jsonString = "{\"q\":1}";
console.log(isJsonString(jsonString));
