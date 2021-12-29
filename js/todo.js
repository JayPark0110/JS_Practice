const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);