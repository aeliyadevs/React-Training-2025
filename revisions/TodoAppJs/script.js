let todoItems = [];

let inputBox = document.getElementById("input-box");
inputBox.addEventListener("change", setTaskItem);

let task = {};
let taskIndex = null;

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
    todoItems.push(task);
    localStorage.setItem("Tasks", JSON.stringify(todoItems));
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
  if (todoItems.length != 0) {
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
      if (todoItems[i].status === "completed") {
        checkbox.checked = true;
      }

      let itemText = document.createElement("p");
      itemText.innerHTML = todoItems[i].title;

      let progress = document.createElement("div");
      progress.classList.add("progress");

      let icon = document.createElement("i");
      icon.id = "icon-" + (i + 1);
      icon.classList.add("fa-solid", "fa-xmark");
      icon.addEventListener("click", deleteItem);

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

function deleteItem(e) {
  for (i = 0; i < todoItems.length; i++) {
    if (e.target.id == "icon-" + (i + 1)) {
      taskIndex = i;
    }
  }
  todoItems.splice(taskIndex, 1);
  localStorage.setItem("Tasks", JSON.stringify(todoItems));
  createItem();
}

function markComplete(e) {
  for (i = 0; i < todoItems.length; i++) {
    if (e.target.id == "chk-" + (i + 1)) {
      taskIndex = i;
    }
  }
  if (todoItems[taskIndex].status == "new") {
    e.target.parentElement.classList.add("complete");
    todoItems[taskIndex].status = "completed";
  } else {
    e.target.parentElement.classList.remove("complete");
    todoItems[taskIndex].status = "new";
  }

  localStorage.setItem("Tasks", JSON.stringify(todoItems));
}
