const score = 400

const balance = new Number(100.244)
console.log(balance);

console.log(balance.toString().length); //toString convert in string and find number of character
console.log(balance.toFixed(2));   // give the 2 value only after the decimal(.)

const value = 73.454
console.log(value.toPrecision(4));  // give the number of precision value (73.45)

const dollar = 10000
console.log(dollar.toLocaleString('en-IN'));  // convert into indian number system output->1,000

//-----------------------------------MATHS-------------------------------------

console.log(Math);
console.log(Math.abs(-4));       //covert the only (-)minus value into (+)plus
console.log(Math.round(7.6));    //round off the value

console.log(Math.ceil(4.02));    // round off the highest value output->5
console.log(Math.floor(4.9));   // round off the lowest value output->4

console.log("min:",Math.min(4,9,2.2,6,7,));   // include the decimal number
console.log("max:",Math.max(4,1,44,2,11,6));

// -------------------important------------------------
console.log(Math.random());          // give the value between 0 and 1

console.log(Math.random()*10);       // shift the one value before decimal

console.log((Math.random()*10) + 1);   // avoid the (0) condition if value is 0.01224 because in dice 1 to 6 number only

console.log(Math.floor(Math.random()*10) + 1); 

const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min + 1)) + min); // give the minimum value 10

