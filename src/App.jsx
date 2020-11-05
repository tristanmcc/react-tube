import logo from ".assets/logo.svg";
import ".styles/App.css";

import React, { useState } from "react";

function App() {
    const [total, setTotal] = useState(10);
    return(
        <div className = "App">
        <header classNmae = "App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
        Edit <code> src/App.js </code> and save to reload.
        </p>
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer"
        >
        Learn react
        </a>
        <p>Hello {total}</p> 
        <button
        onClick
        </header>
        </div>
  );
}

export default App;
