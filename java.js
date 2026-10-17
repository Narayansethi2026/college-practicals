// var laptop = document.querySelector("h4")
// var add = document.querySelector("#add")
// var check = 0

// add.addEventListener("click", function () {

//     if (check == 0) {
//         laptop.innerHTML = "web developers"
//         laptop.style.color = "red"
//         console.log("hui hui hui")
//         check = 1
//     }
// })
// var  heading = document.getElementById('myheading');
// var  button = document.getElementById('changebtn');

// button.addEventListener('click',function(){
//     heading.textContent = "javascript dom hogaya";
    
//     heading.style.color = "crimson";
//     heading.style.fontSize = "35px";
//     button.style.border = "2px solid red";
//     button.style.color = "blue";
//     button.style.backgroundColor = "yellow";

// })
// function changeColor(color) {
//     document.getElementById("box").style.backgroundColor = color;

// }
// function darkmode() {
//     document.getElementById("page").style.backgroundColor = "black";
//     document.getElementById("page").style.color = "white";
// }
// function lightmode() {
//     document.getElementById("page").style.backgroundColor = "white";
//     document.getElementById("page").style.color = "black"; 
// }
// function showPassword() {
//     let p = document.getElementById("pass");

//     if(document.getElementById("show").checked) {
//         p.type = "text";
//     }else{
//         p.type = "Password"
//     }
// }
let count = 0;
var countN1 = document.getElementById('count');
var incbtn = document.getElementById('inc');
var decbtn = document.getElementById('dec');
var resetbtn = document.getElementById('reset');

function updateui(){
    countN1.textContent = count;
    countN1.style = count > 0 ? 'green' : count < 0 ?'red' : '#333';

}
incbtn.addEventListener('click',() => {count++; updateui(); });
decbtn.addEventListener('click',() => {count--; updateui(); });
resetbtn.addEventListener('click',() => { count = 0; updateui(); });