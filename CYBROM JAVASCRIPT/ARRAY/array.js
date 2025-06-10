//ARRAY => COLLECTION OF SIMILAR AND DIFFERENT DATATYPES..

// let names = ["mayank","lucky",12,"ram","ayush"];

//-----------------------------------------------METHODS OF ARRAYS---------------------------------------//

// 1. LENGTH => RETURNS THE NUMBER OF ELEMENTS IN THE ARRAY.
// 2. POP  => REMOVES THE LAST ELEMENT.
// 3. PUSH => ADDS A NEW ELEMENT TO THE END.
// 4. SHIFT => REMOVES THE FIRST ELEMENT.
// 5. UNSHIFT => ADDS A NEW ELEMENT IN THE START.
// 6. SLICE =>  IT GIVES THE COPY OF THE DEMANDED ELEMENT USING INDEXING.
// 7. SPLICE => IT REMOVES AND ADDS IN PLACE OF THAT GIVEN INDEXED ELEMENT.


// let names = ["mayank","lucky","ram","ayush"];

// console.log(names[2]);

// // 1. LENGTH
// console.log(names.length);

// // 2.  POP
// names.pop();
// console.log(names);

// // 3. PUSH
// names.push("hello");
// console.log(names);

// // 4. SHIFT
// names.shift();
// console.log( names);

// // 5. UNSHIFT
// names.unshift("yoyo");
// console.log(names);

// // 6. SLICE 
// console.log(names.slice(1,3));

// // 7. SPLICE (FROM WHERE TO ADD , HOW MANY TO DELETE , WHAT TO ADD)
// names.splice(3,0,"piyush");
// console.log(names);



//--------------------------------------ARRAY OF NUMBERS METHODS--------------------------------------//

// 1. SORT => IT MAKE THE ARRAY IN ASCENTING ORDER.
// 2. REVERSE => IT REVERSE THE ARRAY.


let arr =[1,2,9,5,6]

// console.log(arr.sort())

// console.log(arr.reverse());

// DECENTING ORDER..

console.log(arr.sort().reverse());


