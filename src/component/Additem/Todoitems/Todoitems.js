import React, { Component } from "react";
import "./Todoitems.css";
const Todoitem = (props) => {
  const items = props.items;
  const { deletitems } = props;
  let length = items.length;
  const listitems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span onClick={() => deletitems(item.id)}>X</span>
        </div>
      );
    })
  ) : (
    <p>there is not items</p>
  );
  return (
    <div className="to">
      <div className="spans">
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      <span className="span">{listitems}</span>
    </div>
  );
};

export default Todoitem;
