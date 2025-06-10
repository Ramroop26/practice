// Create an input field and a button:
//     Allow the user to enter their favorite color.
//     When the button is clicked, change the background color of the page to the entered color..

let  Color=()=> {
  let color = document.querySelector("#colorInput").value;
  document.body.style.backgroundColor = color;
}
