import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name " />
      </form>
    </div>
  );
}

export default Login;
