import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginToApp = (e) => {
    e.preventDefaualt();
  };
  const register = () => {
    if (!name) {
      return alert("please fill all the inputs");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
      userAuth.user
        .updateProfile({ displayName: name, photoURL: photoUrl })
        .then(() =>
          dispatch(
            login({
              email: userAuth.user.email,
              displayName: name,
              photoUrl: photoUrl,
              uid: userAuth.user.uid,
            })
          )
        )
        .catch((err) => alert(err.message))
    );
    alert("successs");
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={register}>
          Sign-in
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
