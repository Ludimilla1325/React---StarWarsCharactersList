import React, { Component } from "react";

import { CardList } from "./component/card-list/card-list.component";
import { Pagination } from "react-bootstrap";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      infos: {},
      characters: [],
      items: [],
      active: 1,
      pages: 0,
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          infos: result,
          characters: result.results,
          pages:
            result.count % 2 === 0
              ? Math.round(result.count / 10)
              : Math.round(result.count / 10) + 1,
        });
      });
  }

  render() {
    if (this.state.items.length <= 0) {
      for (let number = 1; number <= this.state.pages; number++) {
        this.state.items.push(
          <Pagination.Item key={number} onClick={() => this.load(number)}>
            {number}
          </Pagination.Item>
        );
      }
    }
    return (
      <div className="App">
        <img
          src={require("./assets/img/letreiro.png")}
          style={{ width: "450px", margin: "50px 0 50px 0" }}
          alt="letreiro"
        />
        <CardList characters={this.state.characters} />
        <Pagination>{this.state.items}</Pagination>
      </div>
    );
  }

  load(page) {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => response.json())
      .then((result) =>
        this.setState({ infos: result, characters: result.results })
      );
  }
}

export default App;
