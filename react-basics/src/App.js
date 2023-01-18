import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";
import person1 from "./img/person_1.jpg";

function App() {
  const [name, setName] = useState("Lily Collins");
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );
  const changeNameHandler = () => {
    setName("Umaria");
  };
  return (
    <div className="App">
      <button className="button" onClick={changeNameHandler}>
        Change Name
      </button>
      <Card avatar={person1} name={name}>
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
