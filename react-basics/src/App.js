import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import { faker } from "@faker-js/faker";

function App() {
  const [cards, setCards] = useState([
    {
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
    },
    {
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
    },
    {
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
    },
    {
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
    },
    {
      name: faker.name.fullName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
    },
  ]);

  const deleteCardHandler = (index) => {
    const cards_copy = [...cards];
    cards_copy.splice(index, 1);
    setCards(cards_copy);
  };

  return (
    <div className="App">
      <button className="button-blue">Show Card</button>
      {cards.map((card, index) => (
        <Card
          avatar={card.avatar}
          name={card.name}
          title="hehe"
          onDelete={() => deleteCardHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;
