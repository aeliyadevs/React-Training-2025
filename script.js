let inputBox = document.getElementById("input-box");
inputBox.addEventListener("change", setTaskItem);

let task = "";
let taskArray = [];

function setTaskItem(event) {
  task = event.target.value;
}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", saveTask);

function saveTask(e) {
  if (task == "") {
    alert("Enter your task first");
  } else {
    taskArray.push(task);
    localStorage.setItem("Tasks", taskArray);
  }
}
