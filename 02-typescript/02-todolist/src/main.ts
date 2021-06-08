const appRoot = document.getElementById("app");
if (!(appRoot instanceof HTMLDivElement)) {
  throw new Error("Can't find an element with id 'app'");
}
interface State {
  title: string;
  done: boolean;
}

const todos: State[] = [
  { title: "Learn NodeJs", done: false },
  { title: "Learn Python", done: false },
];

const render = () => {
  appRoot.innerHTML = "";
  const ulElement = document.createElement("ul");
  appRoot.appendChild(ulElement);

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
      render();
    });
  }
  const formElement = document.createElement("form");
  const inputText = document.createElement("input");
  const buttonElement = document.createElement("button");

  inputText.setAttribute("type", "text");
  buttonElement.innerText = "Add To Do";
  buttonElement.setAttribute("type", "submit");
  formElement.setAttribute("method", "post");
  formElement.setAttribute("action", "");
  formElement.appendChild(inputText);
  formElement.appendChild(buttonElement);
  appRoot.appendChild(formElement);

  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputText.value.trim() === "") {
      const pError = document.createElement("p");
      pError.innerText = "Todo can't be empty";
      formElement.appendChild(pError);
      inputText.value = "";
    } else {
      todos.push({ title: inputText.value, done: false });
      render();
    }
  });
};

render();
