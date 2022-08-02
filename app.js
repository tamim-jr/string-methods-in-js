let part1 = "This is the first example of this js tutorial. ";
let part2 = "This is the second example of this tutorial.";

//CharAt in JavaScript
console.log(part1.charAt(3));


//charCodeAt in JavaScript
console.log(part1.charCodeAt(2));

//concat
console.log(part1.concat(part2));

//endsWith
console.log(part1.endsWith("JavaScript"));

//includes
console.log(part1.includes("This"));

//indexof
console.log(part1.indexOf("example"));

//lastIndexof
console.log(part1.lastIndexOf("i"));

//match()
console.log(part1.match(/is/g));

//repeat()
console.log(part1.repeat(12));

//replace()
console.log(part1.replace(/js/g, "JavaScript"));

//search()
console.log(part1.search("the"));

//slice()
console.log(part1.slice(2, 5));

//split()
console.log(part1.split(" "));

//toUpperCase
console.log(part1.toLocaleLowerCase());

//tolowerCase
console.log(part1.toLocaleUpperCase());