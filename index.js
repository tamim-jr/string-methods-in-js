// let tweet = prompt("Type your tweet in here");

// let slicedTweet = tweet.slice(0, 150);

// alert(slicedTweet + "\nYour original tweet size is" + tweet.length);

let firstName = prompt("Type your name");
let upper = firstName[0].toLocaleUpperCase();

alert(upper + firstName.slice(1, 30) + "\nYour original name size is" + firstName.length);