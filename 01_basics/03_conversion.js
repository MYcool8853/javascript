let place = "varanasi"

console.log(place)
console.log(typeof(place))

let valueNumber = Number(place) // (string or undefined or "34abc"):output->NaN, (null or ""):output->0
console.log(valueNumber)        // Boolean:output->false(0) or true(1) 
console.log(typeof valueNumber) //let place="33" is string but actual value is number:output->33(number) 


let flag = ""
console.log(flag);
console.log(typeof flag);

let booleanFlag = Boolean(flag)
console.log(booleanFlag)          // (1 or 23,0)->(true,false) , ("","irfan")->(false,true)
console.log(typeof booleanFlag);  // empty->false , non-empty-->true

let age = 24
console.log(age);
console.log(typeof age);

let stringAge = String(age)
console.log(stringAge);         // actual is number but output->24(string) 
console.log(typeof stringAge);









