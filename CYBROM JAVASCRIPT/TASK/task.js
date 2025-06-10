
//---------------TASK 1.------------------//

// var a=5;
// var b=9;

// console.log("The sum of "+a +" and "+b+" is "+(a+b));


//---------------TASK 2.------------------//

// var num = 11;

// if(num%2==0){
//     console.log(num+" is even.");
// }

// else{
//     console.log(num+" is odd.");
// }


//---------------TASK 3.------------------//

// let age=prompt("enter the age");

// if(age>=18){
//     alert("you are eligible for voting.");
// }
// else{
//     alert("not eligible for voting.");
// }

//---------------TASK 4.------------------//

// let ans = confirm("Do you completed the course and have certificate ?");

// if(ans){
//     alert("Congratulations");
// }
// else{
//     alert("Why Do Fast !");
// }

//---------------TASK 5.------------------//

// let num = 1;
// while(num<=10){
//     console.log(num);
//     num++;
// }

//---------------TASK 3.------------------//

// let num = prompt("enter the num")

// do {
// prompt("enter the num")
// } 
// while (num<=10);


//---------------TASK 4.------------------//
// let arr1 = [1,2,3,4,5];
// let arr2 =[6,7,8,9,10];
// let arr3 = [11,12,13,14,15];

// let ans = arr1.concat(arr2,arr3);
// console.log(ans);


//---------------TASK 5.------------------//

// let user = prompt("sum of 4 + 3 ");

// if(user==7){
//     alert(" correct excellent");
// }
// else{
//     alert("Incorrect");
// }


//---------------TASK 6.------------------//
// let ans = prompt("enter your name");
// alert("you have "+ans.length +" letters")


// --------------TASK 7.------------------//

let orange = ()=>{
    let show = document.querySelector("#box")
    show.style.backgroundColor="orange"
}

let green = ()=>{
    let show1= document.querySelector("#box")
    show1.style.backgroundColor="green"
}

let reset = ()=>{
    let show2= document.querySelector("#box")
    show2.style.backgroundImage="none"
    show2.style.backgroundColor="grey"
}

let image = ()=>{
    let show3= document.querySelector("#box")
    show3.style.backgroundImage='URL(https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=180)'
}

let changes = ()=>{
    let show4= document.querySelector("#box")
   show4.src = "https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180"
}