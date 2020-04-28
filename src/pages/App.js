import React from "react";
import "../style/App.css";
import Header from "../components/Header";
import Inicio from './Inicio'

function App() {
  return (
    <div className="container">
      <Header />
      <Inicio />
    </div>
  );
}

export default App;
