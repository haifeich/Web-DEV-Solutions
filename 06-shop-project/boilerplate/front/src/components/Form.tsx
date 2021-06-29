import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface inputInfo {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  postcode: number;
}
export default function Form() {
  const [inputs, setInputs] = useState<inputInfo>();
  return (
    <form action="#" method="post">
      <label htmlFor="firstname">First name</label>
      <input type="text" id="firstname" name="firstname" />
      <label htmlFor="lastname">Last name</label>
      <input type="text" id="lastname" name="lastname" />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" />
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" />
      <label htmlFor="postcode">Post code</label>
      <input type="number" id="postcode" name="postcode" />
      <input type="submit" value="confirm" />
    </form>
  );
}
