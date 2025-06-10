// print counting from 1 to 10 on console:

function count(){
    for(var i=0; i<=10; i++){
        console.log(i)
    }
}
count()

// confirm()
function website(){
    var ans = confirm("Do you like my website")
    if(ans){
        alert("Thank you!")
    }
    else{
        alert("Sorry!")
    }
}
website()