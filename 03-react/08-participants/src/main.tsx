import * as React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "./components/Home";
import Participant from "./components/Participant";
const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/participant/:username" children={<Participant />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, appDiv);
