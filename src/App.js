import Login from "./pages/Login";
import Header from "./components/Header";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Header>
        Task Tracker
      </Header>
      <hr />
      <Login/>
      <hr />
    </div>
  );
}

