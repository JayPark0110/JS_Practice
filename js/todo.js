const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // string으로 바꿔서 array로 저장하게 됨.
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭된 button은 부모를 갖고 있고 부모인 li를 삭제함.    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id; // 개별적으로 삭제하기 위해 필요한 식별 아이디

    const span = document.createElement("span");
    span.classList.add("todo");
    span.innerText = " " + newToDo.text;
    const button = document.createElement("button");
    button.classList.add("todo-button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 자식으로 내부에 span 생성
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // 개별 삭제 위한 식별자
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}