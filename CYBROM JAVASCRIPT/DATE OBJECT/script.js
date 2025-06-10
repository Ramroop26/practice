// let MyDate = new Date();
// console.log(MyDate.getFullYear());

// console.log(MyDate.getMonth());

// console.log(MyDate.getMonth()+1);

// console.log(MyDate.getDate());

// console.log(MyDate.getDay());

// console.log(MyDate.getDay()+1);

// console.log(MyDate.getHours());

// console.log(MyDate.getMinutes());

// console.log(MyDate.getSeconds());

// console.log(MyDate.getMilliseconds());

// console.log(MyDate.toLocaleString());

// let today = MyDate.getDay()
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.writeln(days[MyDate.getDay()]);


setInterval(()=>{
    let cuDate = new Date()


let show = document.querySelector("#hello")
show.innerHTML = `${cuDate.getHours()} : ${cuDate.getMinutes()} : ${cuDate.getSeconds()}`
},1000);

// console.log(Math.round)
