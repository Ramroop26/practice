

//-----------------------------------------------FILPCART TASK -----------------------------------------------------//

let image1 = ()=>{
    let show = document.querySelector("#main")
    show.style.backgroundImage = 'URL(https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180)'
}


let image2 = ()=>{
    let show1 = document.querySelector("#main")
    show1.style.backgroundImage = 'URL(https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=180)'
}



let image3 = ()=>{
    let show2 = document.querySelector("#main")
    show2.style.backgroundImage = 'URL(https://themewagon.github.io/Coffo/images/img-1.png)'
}


// -------------------------------------------PARAGRAPH FONT SIZE TASK---------------------------------------------------------//

// let  change = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.fontSize = "30px";
// }

// let  hide = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display= "none";
// }

// let  unhide = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display = "block";
// }

// let  reset = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.fontSize = "16px";
// }

let hide=()=> {
    let hide = document.querySelector("#text")
    if( hide.style.display === "none"){
        hide.style.display = "block";
        hide.style.color = "green";
    }
    else{
        hide.style.display = "none";

    }
}



// ------------------------------------------------INCREMENT AND DRECMENT COUNTING TASK-----------------------------------------------//

// let count =0;

// let incre = ()=>{
    
//     let show = document.querySelector("#counting");
//     count++;
//         show.innerHTML= count;
    
   
// }
// let decre = ()=>{

    
//     let show1 = document.querySelector("#counting");
//     if(count>0){
//         count--;
//         show1.innerHTML= count;
//     }
    
// }

// let reset = ()=>{
//     let show2 = document.querySelector("#counting")
//     show2.innerHTML = 0;
// }


//-----------------------------------------SHOW THE GIVEN INPUT IN ALERT BOX-----------------------------------------------// 

let SHOW =()=>{
    
    let show  = document.querySelector("#name").value
    alert(show)

}