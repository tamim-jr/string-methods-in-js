// let tweet = prompt("Type your tweet in here");

// let slicedTweet = tweet.slice(0, 150);

// alert(slicedTweet + "\nYour original tweet size is" + tweet.length);

// let firstName = prompt("Type your name");
// let upper = firstName[0].toLocaleUpperCase();

// alert(upper + firstName.slice(1, 30) + "\nYour original name size is" + firstName.length);

let userName = prompt("Type your name");
let toLower = userName.toLocaleLowerCase();
let toUpper = userName.toLocaleUpperCase();

let lastPart = toLower.slice(1);
let firstPart = toUpper.slice(0, 1);
alert(firstPart + lastPart);