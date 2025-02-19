const myname = "mycool"
const count = 50
// console.log(myname+count+" Value");

// It is string interpolation syntax
console.log(`my nane is ${myname} and my repo count is ${count}`);

const gameName = new String("irfankhan")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,7)
console.log(anotherString);

const myString = "  manu   "
console.log(myString);
console.log(myString.trim());

const url = "https://www.youtube.com%20watch"
console.log(url.replace('%20',"_"));

console.log(url.includes("youtube"));
