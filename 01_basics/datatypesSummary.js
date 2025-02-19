// ---------------Primitive----------------------

// 7 Types : Null, Number, BigInt, Boolean, String, Symbol(), Undefined

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(id);
console.log(id.description);



const bigNumber = 42638765489172346237n
console.log(bigNumber,typeof bigNumber);

// ----------------Non-Primitive-----------------------------

// Array
const movie = ["spiderman","ironman","jumanji","godzilla"]
console.log(movie,typeof movie);


// Object
let myObj = {
    name: "irfan_khan",
    age: 22,
    city: "varanasi",
}
console.log(myObj,typeof myObj);


// Funtion
const myFuntion = function(){
    
    console.log("hello Mycool");    
}
myFuntion()
console.log(typeof myFuntion);  //output->funtion but in detail we call is (Object funtion) 

// Note: Type of all Non-Primitive Datatypes is Object
