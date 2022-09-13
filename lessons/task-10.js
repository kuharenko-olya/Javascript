//1.
function getMilliseconds(ms) {
    let date = new Date(ms);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    let formattedDate = `${day}.${month}.${year}`;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();
    todayDay = todayDay < 10 ? '0' + todayDay : todayDay;
    todayMonth = todayMonth < 10 ? '0' + todayMonth : todayMonth;
    let todayDate = `${todayDay}.${todayMonth}.${todayYear}`

    return formattedDate === todayDate;
}

console.log(getMilliseconds(1663053771000));

//2.
function createDateAndTime(ms) {
    let date = new Date(ms)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    //let second = date.getSeconds();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    //second = second < 10 ? '0' + second : second;
    return `${day}.${month}.${year} ${hour}:${minute}`;
}

console.log(createDateAndTime(1664004243000));


//3.
function getDifference(ms) {
    let currentTimestamp = new Date().getTime();
    let differenceInMs = ms - currentTimestamp;
    let differenceInSeconds = Math.floor(differenceInMs / 1000);
    let differenceInMinutes = Math.floor(differenceInSeconds / 60);
    let secondsRest = differenceInSeconds - differenceInMinutes * 60
    let differenceInHours = Math.floor(differenceInMinutes / 60);
    let minutesRest = differenceInMinutes - differenceInHours * 60
    let differenceInDays = Math.floor(differenceInHours / 24);
    let hoursRest = differenceInHours - differenceInDays * 24
    let differenceInMonths = Math.floor(differenceInDays / 30);
    let daysRest = differenceInDays - differenceInMonths * 30
    let differenceInYears = Math.floor(differenceInMonths / 12);
    let monthRest = differenceInMonths - differenceInYears * 30;

    return `${(differenceInYears)} y ${(monthRest)} m ${(daysRest)} d ${(hoursRest)} h ${(minutesRest)} min ${(secondsRest)} sec`;
}

console.log(getDifference(1664004243000));
