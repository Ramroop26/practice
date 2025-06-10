// let text = "rohit"; //string
// let fruits =["rohit",25, "bhopal"] //this is array

// let obj = {
//     //KEY: VALUE
//     name:"rohit",
//     Age:25,
//     city:"bhopal"
// }
// obj.college="cybrom";
// obj.Age=26
// delete obj.city
// console.log(obj);
// console.log(obj.Age);
//----------------------------------------Destructuring--------------------------------------------------------------------------------//
// Destructuring is a way to unpack values from arrays or objects into distinct variables

// let student = {name:"RAMROOP PRAJAPATI", age:25, city:"bhopal"};
// let {name,age} = student;
// console.log(name);
// console.log(age);

//----------------------------------------------------spread Operator-----------------------------------------------------------------//
// The spread operator is a feature in JavaScript that allows an iterable (such as an array or a string) to be expanded into a new array
// let student1 = {firstname:"RAMROOP ", age:23, city:"morena"}
// let student2 = {lastname:"PRAJAPATI", Age:25, City:"bhopal"}
// let combinedStudent={...student1,...student2};
// console.log(combinedStudent);



//----------------------------------------------------FOR IN LOOP-----------------------------------------------------------------//
//For in loop is used to iterate over the properties of an object
// let fruit = {
//     Name: "Ramroop Prajapati",
//     Age: 25,
//     City: "Bhopal"
// }
// for (let key in fruit){
//     console.log(key);
//     console.log(fruit[key]);
// }

//---------------------------------------------------FOR OF LOOP-----------------------------------------------------------------//
//For of loop is used to iterate over the values of an array

// let fruits = ["ramroop", "pooja", "sachin"];
// for (let element of fruits){
//     console.log(element);
// }

//----------------------------------------------------MAP---------------------------------------------------------------------// 
// A map is a collection of key-value pairs. It is similar to an object in JavaScript, but it is more powerful and flexible 

// let numbers = [1,2,3,4,5]
// let newarr=numbers.map( (e) => {
//     return e*2
// })
// console.log(newarr);

//----------------------------------------------------FILTER FUNCTION-------------------------------------------------------------//
// The filter() method creates a new array  return with all elements that pass the test implemented by the provided function

// let numbers = [1,2,3,4,5,6,8]
// let newarr=numbers.filter((e) =>{
//     // return e%2==0
//     return e>6
// })
// console.log(newarr);

//-----------------------------------------------------FOR EACH LOOP------------------------------------------------------------//
// The forEach() method calls a function once for each array element. The function takes four arguments: the   string return 
// let numbers = [1,2,3,4,5,6,8]
// let newarr=numbers.forEach((e) =>{
//    console.log (e%2==0);
//   //CALL BACK FUNCTION
//   //call back function is a function that is passed as an argument to another function
//   //HIGH ORDER FUNCTION
//   // high order function is a function that takes another function as an argument
// })



