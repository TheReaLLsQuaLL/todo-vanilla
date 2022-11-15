let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

let data = [];

let formValidation = () => {
  if (textInput.value !== "") {
    console.log("succes");
    msg.innerHTML = "";
    storageData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  } else {
    console.log("error");
    msg.innerHTML = "Need a valid input.";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let storageData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textArea.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  addTask();
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textArea.value = "";
};

let addTask = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
      <div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>
        <span class="options">
          <i
            onClick="editTask(this)"
            data-bs-toggle="modal"
            data-bs-target="#form"
            class="fas fa-edit"
          ></i>
          <i
            onClick="deleteTask(this);createTasks()"
            class="fas fa-trash-alt"
          ></i>
        </span>
      </div>
    `);
  });
  resetForm();
};
