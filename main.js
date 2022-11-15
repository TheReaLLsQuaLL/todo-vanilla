let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

let formValidation = () => {
  if (textInput.value !== "") {
    console.log("succes");
    msg.innerHTML = "";
  } else {
    console.log("error");
    msg.innerHTML = "Need a valid input.";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
