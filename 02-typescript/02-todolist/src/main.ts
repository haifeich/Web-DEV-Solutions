const appRoot = document.getElementById("app");
if (!(appRoot instanceof HTMLDivElement)) {
  throw new Error("Can't find an element with id 'app'");
}
interface State {
  title: string;
  done: boolean;
}

let todos: State[] = [
  { title: "Learn NodeJs", done: false },
  { title: "Learn Python", done: false },
];

if (localStorage.getItem("todos") === null) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// json could be null
const json = localStorage.getItem("todos");
if (json) {
  todos = JSON.parse(json);
}

const render = () => {
  appRoot.innerHTML = "";
  const ulElement = document.createElement("ul");
  appRoot.appendChild(ulElement);

  // sort alphapetically
  todos.sort((a, b) => a.title.localeCompare(b.title));

  for (const todo of todos) {
    const liElement = document.createElement("li");
    const pTitle = document.createElement("p");
    const spanDone = document.createElement("span");
    const inputCheck = document.createElement("input");
    liElement.appendChild(pTitle);
    liElement.appendChild(spanDone);
    liElement.appendChild(inputCheck);
    pTitle.innerText = todo.title;
    spanDone.innerText = todo.done ? "done" : "not done";
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.checked = todo.done;
    ulElement.appendChild(liElement);
    inputCheck.addEventListener("change", () => {
      todo.done = !todo.done;
      // each change of the todo item should be tracked in localStorage
      localStorage.setItem("todos", JSON.stringify(todos));
      render();
    });
  }
  const formElement = document.createElement("form");
  const inputText = document.createElement("input");
  const buttonSubmit = document.createElement("button");
  const buttonDone = document.createElement("button");
  const buttonUndone = document.createElement("button");
  inputText.setAttribute("type", "text");
  buttonSubmit.innerText = "Add To Do";
  buttonDone.innerText = "Already Done";
  buttonUndone.innerText = "Not Done";
  buttonSubmit.setAttribute("type", "submit");
  formElement.setAttribute("method", "post");
  formElement.setAttribute("action", "");
  formElement.appendChild(inputText);
  formElement.appendChild(buttonSubmit);
  formElement.appendChild(buttonDone);
  formElement.appendChild(buttonUndone);
  appRoot.appendChild(formElement);

  //add a div for empty input error handler and placerholder for done and undone list
  const divHolder = document.createElement("div");
  appRoot.appendChild(divHolder);

  // Done list
  buttonDone.addEventListener("click", (event) => {
    event.preventDefault();
    divHolder.innerHTML = "";
    const todoDones = todos.filter((todo) => todo.done == true);
    const ulDone = document.createElement("ul");
    ulDone.setAttribute("id", "done");
    for (const todoDone of todoDones) {
      const liDone = document.createElement("li");
      liDone.innerText = todoDone.title;
      ulDone.appendChild(liDone);
    }
    divHolder.appendChild(ulDone);
  });

  // Undone list
  buttonUndone.addEventListener("click", (e) => {
    e.preventDefault();
    divHolder.innerHTML = "";
    const todoUndones = todos.filter((todo) => todo.done == false);
    const ulUndone = document.createElement("ul");
    ulUndone.setAttribute("id", "undone");
    for (const todoUndone of todoUndones) {
      const liUndone = document.createElement("li");
      liUndone.innerText = todoUndone.title;
      ulUndone.appendChild(liUndone);
    }
    divHolder.appendChild(ulUndone);
  });

  // Submit new todo
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputText.value.trim() === "") {
      divHolder.innerHTML = "";
      const pError = document.createElement("p");
      pError.setAttribute("id", "error");
      pError.innerText = "Todo can't be empty";
      divHolder.appendChild(pError);
      inputText.value = "";
    } else {
      todos.push({ title: inputText.value, done: false });
      //each change of todo should be tracked
      localStorage.setItem("todos", JSON.stringify(todos));
      render();
    }
  });
};

render();
