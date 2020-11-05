//React core
import React from "react";

// other info
import information from "./information.json";

//CSS


//Components
import Card from "./components/Card";
import Header from "./components/Header";

function App() {

  //State
  return (
    <div>
      <Header />
        <Card data = {information[0]}></Card>
    </div>
  );
}

export default App;
