// we can declare the Object{} in two ways 1."Literals Object" 2."Constructor Object"
// the concept of singleton--> Literals Object('not create singleton')
// Constructor Object('create singleton')
//we can declare the object keys (name :"mycool",) by default system procees the keys("name") as string

// Object literals

const user = {
    name :"mycool",
    age:18,
    "fullName": "irfan_khan",  // declare the keys using this type we can acces keys by using ["keys"] this approach only
    city: "varansi",
    email:"mycool@gmail.com",
    isLoggedIn: false,
    lastLogin: ["monday","saturday"]
}

console.log(user);
console.log(user.name);          //calling using (.)operator
console.log(user["fullName"]);   //calling using ["keys"]


