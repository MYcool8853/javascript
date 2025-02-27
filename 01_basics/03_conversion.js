let place = "varanasi"

console.log(place)              //varanasi
console.log(typeof(place))      //string

let valueNumber = Number(place) // (string or undefined or "34abc"):output->NaN, (null or ""):output->0
console.log(valueNumber)        // Boolean:output->false(0) or true(1) 
console.log(typeof valueNumber) //let place="33" is string but actual value is number:output->33(number) 


let flag = ""
console.log(flag);           // blank
console.log(typeof flag);    // string

let booleanFlag = Boolean(flag)
console.log(booleanFlag)          // (1 or 23,0)->(true,false) , ("","irfan")->(false,true)
console.log(typeof booleanFlag);  // empty->false , non-empty-->true

let age = 24
console.log(age);
console.log(typeof age);      // number

let stringAge = String(age)
console.log(stringAge);         // actual is number but output->24(string) 
console.log(typeof stringAge);

//******************************operation********************************************

let value = 3
let negativeValue = -value
console.log(negativeValue);

console.table([2+2,2-2,2*2,2/2,3%2,2**3]);

// *****************************************Coercion******************************

console.log("1"+2);
console.log(1+"2");
console.log(1-"4");  
console.log("1"-2);
console.log("1"+2+2);
console.log("1"-6-2);
console.log(1+2+"2");

// In coercion compiler expect the type of variable is same but in case variable is 
// not same then JavaScript follows specific rules for coercion based on operator types and context.

console.log(+true); //trick conversion of boolean
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1,num2,num3);

let x = 100
let y = x++  // in postfix first assing the value then increment
console.log("x =",x,"y =",y);  // x=101 ,y=100

y = ++x     // in prefix first increment the value then assing
console.log("x =",x,"y =",y);  //y=101 ,x=101









