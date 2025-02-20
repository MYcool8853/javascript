const id = 11
let email = "mycool@gmail.com"
var password = 2233;
city = "varanasi"  // allow declare without using any variable
let state;

// id = 4 not allow reassign,redeclare
// let email = "irfan@gmail.com" ----not allow redeclare 
email = "irfan@gmail.com"  // ----allow reassign

var password = 5566    // ----allow redeclare and reassign
city = "delhi" 

console.log(id);
console.table([id,email,password,city,state]);
console.log(id,email,password,city,state);

function fn() {
    console.log(city);
}
fn()

if (true) {
    var age = 30;
    console.log(age); 
    function fn(){ console.log(age)}
    fn();
}
console.log(age)

if (true) {
    let id = 30;
    console.log(id); 
    function fn(){ console.log(id)}
    fn();
}
console.log(id) 
