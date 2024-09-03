// Basics of regular expressions - Regular expressions (regex) are powerful tools for
// pattern matching and text manipulation. They allow you to search,
// validate, and manipulate strings based on specific patterns.


let str="js is a very weird language , js is loosely typed"
console.log(str.match(/\bjs\b/g).length)

let digitStr="oneplus 12r 2024"
console.log(typeof digitStr.match(/[0-9]+/g))


// Character classes and quantifiers
let str2="Hi, My name is Bob, also known Bob the Builder"
console.log(str2.match(/\b[A-Z][a-z]+\b/g));


const str3 = "Here are some numbers: 123, 456, and 7890.";
const matches = str3.match(/\d+/g);
console.log(matches);



// Grouping and capturing
let num = "+919090909090";
let match = num.match(/(\+(?<countryCode>\d{2}))(?<phoneNumber>\d{10})/);
console.log(match);


let email="wow@python.org"
console.log(email.match(/(?<username>\w+)(@)(?<provider>\w+).(?<domain>\w+)/))


// Assertions and boundaries
let str4 = "Hello world";
let match1 = str4.match(/\w+$/);
console.log(match1);



let str5 = "Hello world!";
let match2 = str5.match(/^\w+/);
console.log(match2);




// Practical uses

// 1. password validator
let password="M1z*"
console.log(password.match(/[A-Za-z0-9!@#$%^&*]+/g))


// 2. URL validator
let url="www.google.com"
const urlValidator=url.match(/w{3}.[A-Za-z0-9]+.[a-z]+/g)
console.log(urlValidator[0]===url)