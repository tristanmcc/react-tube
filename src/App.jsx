
import logo from "./assets/logo.svg";
import "./css/App.css";
import Card from "./components/Card";
import React, { useState } from "react";

function App() {
  const [total] = useState(5);
  const [title] = useState("Alica Keys");
  const [description] = useState("hello world");

    return(
        <div className = "App">
        <header classNmae = "App-header">
          <h1>Hello {total}</h1>
        <img src={logo} className="App-logo" alt="logo"/>
        
        <Card title= {title} description={description}/>
        
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer">
        Learn react
        </a>
        </header>
        </div>
  );
}

export default App;
