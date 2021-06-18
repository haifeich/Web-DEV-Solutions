import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}
interface UserForm {
  firstname: string;
  lastname: string;
  age: string;
}
interface Fromprops {
  onSumbit: (x: UserForm) => void;
  onChange: (x: UserForm) => void;
}
const Form = (props: Fromprops): JSX.Element => {
  const [input, setInput] = React.useState<UserForm>({
    firstname: "",
    lastname: "",
    age: "",
  });
  return (
    <>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSumbit(input);
        }}
      >
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={input.firstname}
          onChange={(e) => {
            setInput({ ...input, firstname: e.target.value });
            props.onChange({
              firstname: "",
              lastname: "",
              age: "",
            });
          }}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={input.lastname}
          onChange={(e) => {
            setInput({ ...input, lastname: e.target.value });
            props.onChange({
              firstname: "",
              lastname: "",
              age: "",
            });
          }}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="age"
          id="age"
          value={input.age}
          onChange={(e) => {
            setInput({ ...input, age: e.target.value });
            props.onChange({
              firstname: "",
              lastname: "",
              age: "",
            });
          }}
        />
        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
const App = (): JSX.Element => {
  const [info, setInfo] = React.useState<UserForm>({
    firstname: "",
    lastname: "",
    age: "",
  });
  return (
    <>
      <Form onSumbit={setInfo} onChange={setInfo} />
      <p>{`${info.firstname} ${info.lastname} ${info.age}`}</p>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
