let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());             // Fri Feb 21 2025 11:05:44 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());         // Fri Feb 21 2025
console.log(mydate.toLocaleString());       // 21/2/2025, 11:05:44 am
console.log(typeof mydate);                 // Object

let myCreatedDate = new Date(2023,0,22,5,34)  // (year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
console.log(myCreatedDate.toString());  //Sun Jan 22 2023 00:00:00 GMT+0530 (India Standard Time) here month start with '0' index

let ownFormat = new Date("04,25,2024")      //'2023-00-14' give the invalid date because month start with "1"
console.log(ownFormat.toLocaleString());    // 25/4/2024, 12:00:00 am (syntax:mm/dd/yy)
 
console.log(Date.now()/1000);     // convert into milisecond to second give 1740118350.734
console.log(Math.floor(Date.now()/1000)); // round off the lowest value

let newDate = new Date()
console.log(newDate);      
console.log(newDate.getMonth());
console.log(`${newDate.getDay()} is day`);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
})
);  
