
// Dark Mode //
// function changeColor(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }


const button = document.getElementById("darkModeBtn");

button.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});