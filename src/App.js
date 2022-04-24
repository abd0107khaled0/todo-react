import "./App.css";
import React, { Component } from "react";
import Additem from "./component/Additem/Todoitems/Additemd";
import Todoitem from "./component/Additem/Todoitems/Todoitems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "abdo", age: 19 },
      { id: 2, name: "mohamed", age: 27 },
      { id: 3, name: "HMED", age: 15 },
    ],
  };
  deletitems = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: items,
    });
  };
  itemadd = (item) => {
    item.id = Math.floor(Math.random() * 10);
    let items = this.state.items;
    items.push(item);
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">TodoList</h1>
        <Todoitem items={this.state.items} deletitems={this.deletitems} />
        <Additem itemadd={this.itemadd} />
      </div>
    );
  }
}

export default App;
