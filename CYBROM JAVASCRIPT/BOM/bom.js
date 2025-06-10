

function message() {

    //------------- BOM => BROWSER OBJECT MODEL --------------//


    // 1.  ALERT = IT ONLY SHOWS MESSAGE.
    // 2. CONFIRM = IT HAS TWO CONDITIONS TRUE AND FALSE.
    // 3. PROMPT = IT SHOWS MESSAGE AS WELL AS TAKES MESSAGES.

    //--------------------WINDOWS IN USED BECAUSE IT IS A BROWSER METHOD-------------//

    // ---------------1. ALERT-----------------//
    // window.alert("Are You Fine.")

    // -------------------2.  CONFIRM---------------//

    // let ans =  window.confirm("are you ok.")

    // if(ans){
    //     alert("thank you!")
    // }

    // else{
    //     alert("why?")
    // }


    // --------------- 3. PROMT-----------------//

    // let ans1 = window.prompt("Enter your name ? ")

    // window.alert("Welcome "+ans1);




    //-------------TASK 1.-----------//

    // var num1 = prompt("enter the number1 ")
    //     var num2 = prompt("enter the number2")
    //    var num1 = Number(num1);
    //    var num2 = Number(num2);
    //         alert( num1+num2)
        
    // ---------------TASK 2. -----------------//

    let num=1234
    console.log(Number(num.toString().split("").reverse().join("")));
    
  

    
}

message();





