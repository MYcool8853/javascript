const marvel = ["thor","ironoman","spiderman"]
const dc = ["superman","flash","batman"]

marvel.push(dc)             //push the array into another array
console.log(marvel);        // [ 'thor', 'ironoman', 'spiderman', [ 'suoerman', 'flash', 'batman' ] ]
console.log(marvel[3]);     // here the dc[array] insert as a single data 
console.log(marvel[3][0]);  // superman

const all_heros = marvel.concat(dc) // concat() return the new array and merge properly
console.log(all_heros);             // push() add in existing array

//-------------another---Method--------------------
const new_heros = [...marvel,...dc]   // spread method here array spred into individual array
console.log(new_heros);

const new_arr = [2,3,4,[11,22,33,44],66,88,[12,13,[14,15,16]],77]
const another_arr = new_arr.flat(Infinity)  // we can pass the parameter infinity and depth(2)
console.log(another_arr); // concat() all subarray
 
console.log(Array.isArray("hitesh"));  //check is array or not true/false
console.log(Array.from("hitesh"));    // convert into the array in case cannot convert into array return empty[]
console.log(Array.from({name: "irfan"})); // return empty[] array because in object define make a array from 'keys' or 'value'

let i = 100
let j = 200
let k = 300
console.log(Array.of(i,j,k));  // Returns a new array from a set of elements.
 
