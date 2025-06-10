let  convertToUpper=()=> {
  let sentence = prompt("Enter a sentence:");
  let Up = document.querySelector("#upperText")
  Up.innerHTML = sentence.toUpperCase();
}