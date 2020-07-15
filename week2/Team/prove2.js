// Get user input and put it on the blank div when button clicked
function addItem() {
    document.getElementById("update").innerHTML = document.getElementById("input").value;
}
let y =  [];


function sumNum() {
    let userNum = 0;
   userNum = Number(document.getElementById("numInput").value);
   if (isNaN(userNum)) {
      alert('Please Enter a Number!')
   }
   else {
       y.push(userNum);
       document.getElementById("summedNumber").innerHTML = y.reduce((total, amount) => total + amount);
   }



}

function addInputs() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
document.getElementById("numbersAdded").innerHTML = String(num1 + num2);
}






