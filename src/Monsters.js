import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
// import { Lifecycles } from "./components/life-cycles/Lifecycles.component";
class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monstersName: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monstersName: users }));
  }
  handleChange(e) {
    this.setState({
      searchField: e.target.value
    });
  }
  render() {
    const { monstersName, searchField } = this.state;
    const filteredMonsters = monstersName.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="headerTitle">MONSTERS ROLODEX</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
      // <Lifecycles />
    );
  }
}

// export default

export default Monsters;
