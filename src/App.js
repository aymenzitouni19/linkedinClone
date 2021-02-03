import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        {/* App body */}
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      </Container>

      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
