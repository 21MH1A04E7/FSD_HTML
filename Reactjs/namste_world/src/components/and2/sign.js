import React from "react";
import Input from "./input";
import "./style.css";
function Register() {
  return (
    <>
      <form className="form">
        <Input text="text" placeholder="Username" />
        <Input text="password" placeholder="password" />
        <Input text="password" placeholder="confirm password" />
        <button>Register</button>
      </form>
    </>
  );
}
export default Register;
