console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// --------------camparision different datatypes-------------------

console.log("camparision different datatypes");
console.log("2">1);     // implicity convert the string into number but 
console.log("2"<1);     // sometime not give the predictable result
console.log("2">=1);    // So this type conversion insure that the datatypes is same
console.log("2"<=1);
console.log("2"==1);
console.log("2"!=1);


console.log("camparision null"); // The reason is that an equality check == and comparisons ><>= 
console.log(null > 0);           // <<= work differently. 
console.log(null == 0);          // Comparisons convert null to a number, treating it as 0 
console.log(null >= 0);          // That's why (3) null >= 0 is true and (1) null > 0 is false

console.log("undefined null"); 
console.log(undefined > 0);           
console.log(undefined == 0);           
console.log(undefined >= 0);          

//------------------------(===) check the dataypes and value both are same--------------------
console.log("strict check"); 
console.log('2' === 2);    // output->false datatype are differ but value are same
                           // conversion is not perform 

//-----------------------summmary------------------------
// Camparision of different dataype avoid                             

