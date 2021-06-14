import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

const App = (): JSX.Element => {
  const [f, setF] = React.useState("");
  const [c, setC] = React.useState("");
  const convertFtoC = (x: string) => ((Number(x) - 32) / 1.8).toFixed(2);
  const convertCtoF = (x: string) => (Number(x) * 1.8 + 32).toFixed(2);
  return (
    <>
      <h1>Degrees Converter</h1>
      <input
        type="number"
        value={f}
        onChange={(e) => {
          setF(e.target.value);
          setC(convertFtoC(e.target.value));
        }}
      />
      <span>&#8457;</span>
      {" = "}
      <input
        type="number"
        value={c}
        onChange={(e) => {
          setC(e.target.value);
          setF(convertCtoF(e.target.value));
        }}
      />
      <span>&#8451;</span>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
