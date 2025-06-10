let display = document.querySelector('#display');

let append=(character)=>{
  display.value += character;
}

let clearDisplay=()=> {
  display.value = '';
}

let deleteChar=()=> {
  display.value = display.value.slice(0, -1);
}

let calculate=()=>{

    display.value = eval(display.value);
  }