// -----------------------------METHODS OF STRINGS--------------------------------//

// let a1 = "hello mayank";
// let a2 = " EVERYONE";

 // 1.RETURNS LENGTH OF A STRING..

//  console.log(a1.length); 

// document.write(a1.concat(a2));   // 2.ADDS TO OR MORE STRING..


// document.write("<br>"+a1.toUpperCase())  //3. TOUPPERCASE
// document.write(a2.toLowerCase())         //4. TOLOWERCASE

 //5. CHARAT

//  console.log(a1.charAt(2));  

 //6. CHARCODEAT

//  console.log(a1.charCodeAt(0)); 

 // 7. SLICE

//  document.write(a1.slice(6,12)); 

// 8. REPLACE =>  IT REPLACES THE SAME TEXT WITH DIFFERENT GIVEN TEXT...

// let s = "Javascript is fun and javascript is easy."

// document.write(s.replace("Javascript","HTML"));

// 8. (1) REPLACE ALL IS SAME AS GLOBAL VARIABLE (G).
// document.write(s.replaceAll("Javascript","HTML"));


//8.(2) g=> CONVERT GLOBALLY.

// document.write(s.replace(/Javascript/g,"HTML"));

//8.(3) gi => CASE INSENSITIVE

// document.write(s.replace(/Javascript/gi,"HTML"));


// 9. TRIM => IT REPLACES THE WHITESPACE FROM RIGHT END TO LEFT END.

// let str = "           Javascript is fun and javascript is easy.      "

// console.log(str);
// console.log(str.trim());



//  10. SPLIT => IT CONVERTS THE STRING INTO AN ARRAY..

// let str1 ="Mayank";

// console.log(str1.split(""));




// --------------------------------TEMPLATE LETRALS ( ` ` )-------------------------//

// --------------------USES-------------//
// 1. IT SUPPORTS SINGLE QUOTES('') AND  DOUBLE QUOTES("").
// 2. IT SUPPORTS MULTI LINE STRINGS.
// 3. CAN USE HTML TAGES ALSO.
// 4. CAN DIRECTLY ACCESS THE VARIABLE WITHOUT USING + OPERATOR.


// 1.
// alert(`Hello i am "mayank" and i am from 'bhopal'`);

// 2. 
//   let a =`hello
// everyone i am mayank`


// 3. 
// let a =`hello
// everyone i am <h1>mayank</h1>`

// document.write(a);


// 4. 
// let name = "mayank";
// let age = 21;

// let a = `hello i am  ${name} and i am ${age} years old`;
// document.write(a);


