let todoItems = [];

let inputBox = document.getElementById("input-box");
inputBox.addEventListener("change", setTaskItem);

let task = {};
let taskArray = [];

function setTaskItem(event) {
  task = { title: event.target.value, status: "new" };
}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", saveTask);

let count = 0;

function saveTask(e) {
  if (task == "") {
    alert("Enter your task first");
  } else {
    taskArray.push(task);
    // console.log(taskArray);
    // console.log(JSON.stringify(taskArray));
    localStorage.setItem("Tasks", JSON.stringify(taskArray));

    // count++;
    // localStorage.setItem("Task" + count, task);
  }
  createItem();
}

function getItems() {
  const items = localStorage.getItem("Tasks");
  todoItems = JSON.parse(items);
}
getItems();

let itemsSpace = document.getElementById("task-items");

// create todo list item
function createItem() {
  getItems();
  itemsSpace.innerHTML = "";
  console.log(todoItems);
  if (todoItems != null) {
    for (i = 0; i < todoItems.length; i++) {
      // create main item div
      let item = document.createElement("div");
      item.classList.add("item");
      if (todoItems[i].status === "completed") {
        item.classList.add("complete");
      }
      // create child elements
      let checkbox = document.createElement("input");
      checkbox.id = "chk-" + (i + 1);
      checkbox.type = "checkbox";

      let itemText = document.createElement("p");
      itemText.innerHTML = todoItems[i].title;

      let progress = document.createElement("div");
      progress.classList.add("progress");

      let icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-xmark");

      // append children to item parent
      item.appendChild(checkbox);
      item.appendChild(itemText);
      item.appendChild(progress);
      item.appendChild(icon);

      // append children to main parent
      itemsSpace.appendChild(item);
    }
  } else {
    const message = document.createElement("p");
    message.innerHTML = "Nothing here";
    itemsSpace.appendChild(message);
  }
}
createItem();

for (i = 0; i < todoItems.length; i++) {
  const chk = document.getElementById("chk-" + (i + 1));
  chk.addEventListener("change", markComplete);
}

function markComplete(e) {
  e.target.parentElement.classList.toggle("complete");
}
