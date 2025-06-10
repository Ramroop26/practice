//Destructuring->Destructuring in arrays is a syntax in JavaScript
//(and some other modern programming languages) that allows you to unpack values from arrays into separate variables.

let arr=["Apple","Mango","Banana","Grapes"]
const [a,b,c]=arr // destructuring
console.log(c)   // Banana
console.log(b)   // Mango

// skiping the element to destructuring by using commas

const[x,y,,z]=arr
console.log(z)