let val=()=>{
    let name = document.querySelector("#Name").value
let email = document.querySelector("#Email").value 

let errname = document.querySelector("#errname")
let erremail = document.querySelector("#erremail")


if(name==""){
    errname.innerHTML=" Please Enter Your Name"
    errname.style.color="red"
    errname.style.border="1px solid red"
    
    return false
}

else if(name==""){
  errnumber.innerHTML=" Please Enter Your name"
  errnumber.innerHTML=""
return false
}


 else if(!(email.includes('@') && email.includes('.com'))){
    erremail.innerHTML=" Please Enter Valid Email"
      erremail.style.color="red"
    erremail.style.border="1px solid red"
    return false

}

else if(email==""){
  errnumber.innerHTML=" Please Enter Your Number"
  errnumber.innerHTML=""
return false
}
}