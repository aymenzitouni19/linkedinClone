import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Container } from "@material-ui/core";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <Container>
          {/* App body */}
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </Container>
      )}
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
