//------------------Array---------------------

const arr1 = [1,2,3,4,5,6,7]     // in javascript array is a collection of similar and mix of different datatypes
const arr2 = [0,1,2,3,4,true,"irfan"]  // in javascript array are resizable its not fixed

console.log(arr1);
console.log(arr2[0]); // console.log(arr2["one"]); array elements cannot be access using arbitrary string as indexes

//----------javascript copy operation create Shallow copy rather than Deep copies----------//

// Shallow--> copy of an object is a copy whose properties share the same references (change the orignal value)
// Deep--> copy of an object is a copy whose properties do not share the same references 

const arr3 = new Array(1,2,3,4,5,6) // using automatically add the [] bracet
console.log(arr3[4]);

const arr4 = ["car",'bike',"cycle"]
console.log(arr4);


arr1.push(6)   // add the value last index of array
console.log(arr1);  

arr1.pop()  // remove the last index value 
console.log(arr1); //------------in array push/pop operation perform on last index value


arr1.unshift(9) // shift the first index and insert value
console.log(arr1); // before:[ 0, 1, 2, 3, 4, 5 ] after:[9, 0, 1, 2, 3, 4, 5]

arr1.shift() // remove the first index value 
console.log(arr1); //before:[9, 0, 1, 2, 3, 4, 5], after:[ 0, 1, 2, 3, 4, 5 ]

console.log(arr1.includes(4));  // Searching the 4 in array and return boolean value True/False
console.log(arr1.indexOf(3));   // give the index number where the "3" is insert

const arr5 = arr1.join()
console.log(arr1);
console.log(arr5)     // convert the type into string
console.log(typeof arr5);


console.log("A ",arr1);      // [  1, 2, 3, 4, 5, 6, 7]
const arr6 = arr1.slice(1,3) // in slice() copy the value of index [1],[2] and not inlcude the last range
console.log(arr6);           //[ 2, 3 ]


console.log("B",arr1);        // [  1, 2, 3, 4, 5, 6, 7]
const arr7 = arr1.splice(1,3) // in splice() cut the value of index [1],[2],[3] its include the last range
console.log("C", arr1);       // C [ 1, 5, 6, 7 ]
console.log(arr7);            // [ 2, 3, 4 ]








