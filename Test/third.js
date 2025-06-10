let hide=()=> {
    let hide = document.querySelector("#hide")
    if( hide.style.display == "none"){
        hide.style.display = "block";
        hide.style.color = "green";
        let btn3 = document.querySelector(".btn1")
         btn3.innerHTML="Show"
         btn3.style.backgroundColor="yellow"
    }
    else{
        hide.style.display = "none";

    }
}