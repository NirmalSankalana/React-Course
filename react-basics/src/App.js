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

  return (
    <div className="App">
      <button className="button-blue">Show Card</button>
      {cards.map((card) => (
        <Card avatar={card.avatar} name={card.name} title="hehe" />
      ))}
    </div>
  );
}

export default App;
