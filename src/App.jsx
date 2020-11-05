//React core
import React, { useState } from "react";

//CSS


//Components
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  //State
  const [total] = useState(5);
  const [title] = useState("Alica Keys");
  const [description] = useState("hello world");

  return (
    <div>
      <Header />
      <header>
        
      </header>
    </div>
  );
}

export default App;
