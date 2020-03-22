import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class Monesters extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monostersName: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monostersName: users }));
  }
  handleChange(e) {
    this.setState({
      searchField: e.target.value
    });
  }
  render() {
    const { monostersName, searchField } = this.state;
    const filteredMonosters = monostersName.filter(monoster =>
      monoster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="headerTitle">MONOSTERS ROLODEX</h1>
        {/* <SearchBox
          placeholder="search monosters"
          handleChange={this.handleChange}
        /> */}
        <CardList monosters={filteredMonosters} />
      </div>
    );
  }
}

// export default

export default Monesters;
