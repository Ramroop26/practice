let val =()=>{

let name = document.querySelector("#Name").value.trim()
let number = document.querySelector("#Number").value
let email = document.querySelector("#Email").value 
let password = document.querySelector("#Password").value 
let confirmpassword = document.querySelector("#ConfirmPassword").value


let errname = document.querySelector("#errname")
let errnumber = document.querySelector("#errnumber")
let erremail = document.querySelector("#erremail")
let errconfirmpassword = document.querySelector("#errconfirmpassword")




if(name==""){
    errname.innerHTML=" please enter your name"
    errname.style.color="red"
    namebox.style.border="1px solid red"
    // document.querySelector("#name").style.border="1px solid red"
    return false
}




else if(isNaN(number)){
    errnumber.innerHTML=" please enter valid number"
    return false

}

else if(number.length!=10){
    errnumber.innerHTML=" please enter 10 digit number"
    return false

}





 else if(!(email.includes('@') && email.includes('.com'))){
    erremail.innerHTML=" please enter valid email"
    return false

}



 else if(password!=confirmpassword){
    errconfirmpassword.innerHTML=" please enter correct password"
    document.querySelector("#cPassword").value=""
    document.querySelector("#cPassword").focus()

    return false

}

else if(!(password.match([/1234567890/]))
    && !(password.match([/!@#$%^&*()_+/]))
      && !(password.match([/A-Z/]))
    && !(password.match([/a-z/]))
){
    errconfirmpassword.innerHTML="Please enter strong Password"
    return false

}


}

