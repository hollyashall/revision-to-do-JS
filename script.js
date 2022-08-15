const input = document.querySelector(".main__input");
const lists_el = document.querySelector(".text");
const addButton = document.querySelector(".main__add");
const list = document.querySelector(".task");
const updateButton = document.querySelector(".button--update");
const deleteButton = document.querySelector(".button--delete");

let currentTask = "";

const handleAddTask = (event) => {
  console.log("button pressed");
  event.preventDefault();
  task = input.value;

  let li = document.createElement("li");
  li.innerHTML = task;

  li.addEventListener("click", (event) => {
    const innerTask = event.target.innerHTML;
    // event.preventDefault();
    lists_el.value = innerTask;
    lists_el.removeAttribute("readonly");

    currentTask = li;
  });

  console.log(list.appendChild(li));
  list.appendChild(li);

  if (!task) {
    alert("enter a task!");
    return;
  }
};

updateButton.addEventListener("click", (event) => {
  console.log("click update");

  console.log(lists_el.value);
  if (lists_el.value == "") {
    alert("enter value");
  } else {
    currentTask.innerHTML = lists_el.value;
  }
});

deleteButton.addEventListener("click", () => {
  console.log("delete");
  currentTask.innerHTML = lists_el.value = "";
  currentTask.remove();
});
addButton.addEventListener("click", handleAddTask);
