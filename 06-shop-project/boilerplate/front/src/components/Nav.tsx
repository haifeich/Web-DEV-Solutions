import * as React from "react";
import { Link } from "react-router-dom";

interface Navprops {
  quantity: number;
}
export default function Nav(props: Navprops) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">{`Cart (${props.quantity || 0})items`}</Link>
    </nav>
  );
}
