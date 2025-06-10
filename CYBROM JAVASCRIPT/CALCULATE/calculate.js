let store = "";

let cal =(value) => {
    let show = document.querySelector("#display")
    store = store+value
    show.innerHTML =  store
}
let Result =()=>{
    let show = document.querySelector("#display")
    show.innerHTML = eval(store) //"1+2"=3
    store= toString()
    // store.innerHTML=store
}

let del=()=>{
    let show = document.querySelector("#display")
    store = store.slice(0,-1)
    show.innerHTML = store
}

let al=()=>{
    let show = document.querySelector("#display")
    store = ""
    show.innerHTML = store
}





