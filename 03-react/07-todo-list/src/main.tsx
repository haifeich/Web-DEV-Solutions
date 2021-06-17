import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

interface Todoitem {
  created: number;
  done: boolean;
  title: string;
}
const initialTodos: Todoitem[] = [
  {
    created: 1,
    done: false,
    title: "Learn Node.js",
  },
  {
    created: 2,
    done: true,
    title: "German A1.1",
  },
];

const localList = localStorage.getItem("list");
let list: Todoitem[] = localList ? JSON.parse(localList) : initialTodos;

function replace<T>(array: T[], value: T, index: number) {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todoitem[]>(list);
  todos.sort((a, b) => a.title.localeCompare(b.title));
  const [newtodo, setNewtodo] = useState<Todoitem>({
    created: Date.now(),
    done: false,
    title: "",
  });
  const [filter, setFilter] = useState("todo");
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "done":
        return todos.filter((todo) => todo.done);
      case "todo":
        return todos.filter((todo) => !todo.done);
      default:
        throw new Error("Unexpected filter.");
    }
  };

  return (
    <>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          if (todos.find((todo) => todo.title === newtodo.title)) {
            setNewtodo({ ...newtodo, title: "" });
          } else if (newtodo.title.trim()) {
            setTodos([...todos, { ...newtodo, created: Date.now() }]);
            localStorage.setItem(
              "list",
              JSON.stringify([...todos, { ...newtodo, created: Date.now() }])
            );
            setNewtodo({ ...newtodo, title: "" });
          }
        }}
      >
        <input
          type="text"
          value={newtodo.title}
          onChange={(e) => {
            setNewtodo({ ...newtodo, title: e.target.value });
          }}
        />
        <input type="submit" value="Add" />
      </form>
      <select
        name="select"
        id="select"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="todo">To do</option>
      </select>
      <ul>
        {filteredTodos().map((todo) => {
          return (
            <li key={todo.created}>
              {todo.title}
              <input
                type="checkbox"
                defaultChecked={todo.done}
                onChange={() => {
                  todo.done = !todo.done;
                  setTodos(
                    replace(
                      todos,
                      todo,
                      todos.findIndex((item) => item.created === todo.created)
                    )
                  );

                  // need to add the new array to the localStorage, or todos?
                  localStorage.setItem(
                    "list",
                    JSON.stringify(
                      replace(
                        todos,
                        todo,
                        todos.findIndex((item) => item.created === todo.created)
                      )
                    )
                  );
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
