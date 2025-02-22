// we can declare the Object{} in two ways 1."Literals Object" 2."Constructor Object"
// the concept of singleton--> Literals Object('not create singleton')
// Constructor Object('create singleton')
//we can declare the object keys (name :"mycool",) by default system procees the keys("name") as string

//-----------------Object literals-------------------//

const sym1 = Symbol('key1')
const user = {
    name :"mycool",
    age:18,
    "fullName": "irfan_khan",  // declare the keys using this type we can acces keys by using ["keys"] this approach only
    city: "varansi",
    email:"mycool@gmail.com",
    isLoggedIn: false,
    lastLogin: ["monday","saturday"],
    [sym1]: "symbl"      // wecan declare the symbol as a key by using [symbol_variable] 
}                        // declare without [symbol_variable] act as normal key object


console.log(user);
console.log(user.name);          //calling using (.)operator
console.log(user["fullName"]);   //calling using ["keys"]
console.log(user[sym1]);         // acces the symbol key using square[symbol_keys] without using (" ") this

user.email = "irfan@gmail.com"
// Object.freeze(user)              // freeze the object cannot change the values
// user.email = "manu@gmail.com"    // not throw any error but changes not apply
console.log(user.email);

user.greeting1 = function()
{
    console.log("hello this is  object function1");
}
user.greeting1()


user.greeting2 = function()
{
    console.log(`hello this is  object function2 ${this.name} ${this.city}`);  //access the keys using funtion 
}                                                                     //this keyword give me the all properties of object
user.greeting2()

