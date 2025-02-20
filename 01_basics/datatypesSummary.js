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
let age = Symbol("age_years")  // Symbol use in Object
let empId = Symbol("emp_id")

let myObj = {
    name: "irfan_khan",
    [age]: 22, // symbol key:value pair
    city: "varanasi",
}
myObj[empId] = 203        // declare object key:value outside the block using ([],"") in case symbol not use ("")
myObj["gender"] = "male"

console.log(myObj,typeof myObj);
console.log(myObj.name);     //call single key using(.) operator in case of symbol not use (.)
console.log(myObj[empId]); 

console.log("----------loop--------");

for(let key in myObj)
{
    console.log(key);  // loop ignore the Symbol()    
}

console.log("----------JSON--------");
console.log(JSON.stringify(myObj));  // convert the object in json format but skip the Symbol value


// Funtion
const myFuntion = function(){
    
    console.log("hello Mycool");   
}
myFuntion()
console.log(typeof myFuntion);  //output->funtion but in detail we call is (Object funtion) 

// Note: Type of all Non-Primitive Datatypes is Object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Stack(Primitive), Heap(Non-Prinmitive)
console.log("------------Stack and Heap------------------");


let myName = "irfan"
let myNickName = myName
myNickName = "manu"

console.log(myName);
console.log(myNickName);

let userOne = {
    email: "irfankhan@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "manucool@gmial.com"

console.log(userOne);
console.log(userTwo);

// Conclusion-> In Stack(Primitive) memory create a new copy and change/update value of copy variable
//              In Heap(Non-Primitive) memory give the reference not create copy,
//              reference means changes/update are in orignal value of variable

// [          ]  both are same reference   [             ]     
// [ userTwo  ]--------------------------->| {           |
// [ userOne  ]--------------------------->|    email:"" |
// [  myName  ]---|                        |    upi:""   |
// [myNickName]   |<--copy value           | }           |
// [__myName__]---|                        [_____________]
//    STACK                                     HEAP


