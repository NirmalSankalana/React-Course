import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./components/Card";
export const NameContext = React.createContext();

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setCards(res.data);
    });
  }, []);
  return (
    <div>
      {cards.map((card, index) => (
        <Card name={card.name} phone={card.phone} id={card.id} />
      ))}
    </div>
  );
}

export default App;
