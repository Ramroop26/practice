// console.log("Task Given");
// //setTimeout(function, delay) delay=> time in milliseconds
// setTimeout(()=>{ // high order function
//     console.log("Task Done");
// }, 2000);
// console.log(" Completed");
//------------------------------------------------------------setTimeout--------------------------------------------------------------//
// settimeout is used to execute a function once after a specified time delay 
//setTimeout(function, delay) delay=> time in milliseconds
// setTimeout is used to execute a function after a specified time
// let set=()=>{
// setTimeout(()=>{ // high order function
//     console.log("Ramroop Prajapati");
// }, 3000);
// }
//-------------------------------------------------------------setInterval--------------------------------------------------------------//
//setInterval is used to execute a function at specified intervals
// let set=()=>{
// setInterval(()=>{ // high order function
//     console.log("Ramroop Prajapati");
// }, 3000);
// }

//--------------------------------------------------------------count---------------------------------------------------------------------//
 let count=0
 let inteval;
  
let set=()=>{
inteval=setInterval(()=>{ 
    count++;
    document.write(count);
}, 3000);
}
let stopp=()=>{
    clearInterval(inteval);
}