let tweet = prompt("Type your tweet in here");

let slicedTweet = tweet.slice(0, 150);

alert(slicedTweet + "\nYour original tweet size is" + tweet.length);