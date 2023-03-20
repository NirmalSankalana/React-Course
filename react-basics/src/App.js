import React, { Component, useState } from "react";
import "./App.css";
import Card from "./Card";
import { faker } from "@faker-js/faker";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          _id: 1,
          name: faker.name.fullName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
        {
          _id: 2,
          name: faker.name.fullName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
        {
          _id: 3,
          name: faker.name.fullName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
        {
          _id: 4,
          name: faker.name.fullName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
        {
          _id: 5,
          name: faker.name.fullName(),
          title: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
        },
      ],
      showCard: true,
    };
  }

  render() {
    const buttonStyle = {
      backgroundColor: null,
    };

    if (this.state.cards.length < 3) buttonStyle.backgroundColor = "yellow";
    if (this.state.cards.length < 2) buttonStyle.backgroundColor = "orange";
    if (this.state.cards.length < 1) buttonStyle.backgroundColor = "red";

    const deleteCardHandler = (index) => {
      const cards_copy = [...this.state.cards];
      cards_copy.splice(index, 1);
      this.setState({ cards: cards_copy });
    };

    return (
      <div className="App">
        <button style={buttonStyle} className="button-blue">
          Show Card
        </button>
        {this.state.cards.map((card, index) => (
          <Card
            key={card._id}
            avatar={card.avatar}
            name={card.name}
            title="hehe"
            onDelete={() => deleteCardHandler(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
