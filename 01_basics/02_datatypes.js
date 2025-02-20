let a = null; // null
let b = 89;   // number range is 2 to power 53
let c = true; //boolean
let d = 214687469836487346327469127649182n; // BigInt
let e = "mycool";    //String
let f = Symbol();    // Symbol()
let g;               // undenfined

console.log(a,b,c,d,e,f,g);
console.table([typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g]);
