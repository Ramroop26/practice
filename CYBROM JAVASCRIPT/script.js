

// ------------------ DAY 3-----------------//


//------- NEW KEYWORDS CAME IN 2015 ES6-------//
// 1. LET.
// 2. CONST. 



//------------ FUNCTIONS IN JS---------------//

// function print(){
//     var a= 10; 
//     var b= 11;
//     console.log(a+b);
    
// }
// function print1(){
//     console.log("a");
// }


   // FUNCTION CALL

//   print1();
//   print(); 



//-----------------1. REDECLARATION--------------//


//------------ALLOWED..

// var a= 5;
// var a=2;


// let b=3;
// let b=8;

//------------NOT ALLOWED..

// const c= 1;
// const c=1;


//-----------------2.REASSIGNMENT-------------//


// ALLOWED..

// var x= 2;
// x=3;


// let y=3;
// y=4;


// NOT ALLOWED..

// const c = 5;
// c=6;



//---------------------3. SCOPE-----------------------//


function print(){
    var a= 10; 
    var b= 11;
    

    {
        a=5;
    }
    console.log(a);
    
    
}


// -------------------------4. HOSTING-------------------//

function host(){

    console.log(a);

//-----------ALLOWED---------// 

    // var a=5;

// ------------NOT ALLOWED------------//

    // let a;
    // const a;
}

host();