import React, { Component } from "react";
import "./Additems.css";
class Additem extends Component {
  state = {
    name: "",
    age: "",
  };
  handelchange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  prevent = (e) => {
    e.preventDefault();
    this.props.itemadd(this.state);
    this.setState({
        name:"",
        age:""
    })
    
  };
  render() {
    return (
      <div className="listitems">
        <form onSubmit={this.prevent}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handelchange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter number..."
            id="age"
            onChange={this.handelchange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Additem;
