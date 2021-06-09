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

// due to the logic of TypeScript json could be null
const json = localStorage.getItem("todos");
if (json) {
  todos = JSON.parse(json);
}

const render = () => {
  appRoot.innerHTML = "";

  const ulElement = document.createElement("ul");
  const formElement = document.createElement("form");
  const inputText = document.createElement("input");
  const buttonSubmit = document.createElement("button");

  inputText.setAttribute("type", "text");
  buttonSubmit.innerText = "Add To Do";
  buttonSubmit.setAttribute("type", "submit");
  formElement.setAttribute("method", "post");
  formElement.setAttribute("action", "");
  formElement.appendChild(inputText);
  formElement.appendChild(buttonSubmit);

  const selecetEl = document.createElement("select");
  const optionDefault = document.createElement("option");
  const optionAll = document.createElement("option");
  const optionDone = document.createElement("option");
  const optionUndone = document.createElement("option");
  optionDefault.setAttribute("selected", "selected");
  optionDefault.setAttribute("value", "default");
  optionDefault.innerText = "-----Choose Your List-----";
  optionAll.setAttribute("value", "all");
  optionAll.innerText = "All";
  optionDone.setAttribute("value", "done");
  optionDone.innerText = "Done";
  optionUndone.setAttribute("value", "undone");
  optionUndone.innerText = "Undone";
  selecetEl.appendChild(optionDefault);
  selecetEl.appendChild(optionAll);
  selecetEl.appendChild(optionDone);
  selecetEl.appendChild(optionUndone);
  formElement.appendChild(selecetEl);
  appRoot.appendChild(formElement);
  appRoot.appendChild(ulElement);

  //add a div for empty input error handler and placerholder for done and undone list
  const divHolder = document.createElement("div");
  appRoot.appendChild(divHolder);

  // sort alphapetically
  todos.sort((a, b) => a.title.localeCompare(b.title));

  const loadList = () => {
    ulElement.innerHTML = "";
    divHolder.innerHTML = "";
    let shows: State[] = [];
    switch (selecetEl.value) {
      case "all":
        shows = todos;
        break;
      case "done":
        shows = todos.filter((todo) => todo.done == true);
        break;
      case "undone":
        shows = todos.filter((todo) => todo.done == false);
        break;
    }
    for (const show of shows) {
      const liElement = document.createElement("li");
      const pTitle = document.createElement("p");
      const spanDone = document.createElement("span");
      const inputCheck = document.createElement("input");
      liElement.appendChild(pTitle);
      liElement.appendChild(spanDone);
      liElement.appendChild(inputCheck);
      pTitle.innerText = show.title;
      spanDone.innerText = show.done ? "done" : "not done";
      inputCheck.setAttribute("type", "checkbox");
      inputCheck.checked = show.done;
      ulElement.appendChild(liElement);

      inputCheck.addEventListener("change", () => {
        let match: number = 0;
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].title == show.title) {
            match = i;
            break;
          }
        }

        todos[match].done = !todos[match].done;

        // each change of the todo item should be tracked in localStorage
        localStorage.setItem("todos", JSON.stringify(todos));
        loadList();
      });
    }
  };
  selecetEl.addEventListener("change", loadList);

  // Submit new todo
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    divHolder.innerHTML = "";
    if (inputText.value.trim() === "") {
      const pError = document.createElement("p");
      pError.setAttribute("id", "error");
      pError.innerText = "Todo can't be empty";
      divHolder.appendChild(pError);
      inputText.value = "";
    } else {
      todos.push({ title: inputText.value, done: false });
      //each change of todo should be tracked
      localStorage.setItem("todos", JSON.stringify(todos));
      if (selecetEl.value == "done" || selecetEl.value == "default") {
        selecetEl.value = "all";
      }
      loadList();
    }
  });
};

render();
