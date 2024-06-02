import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const {name,link,icon,bgColor}=props.data
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor 
        // Ensure bgColor is a valid string representing the color (like "#ff0000" or "red").
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}></a>
      <span>{name}</span>
      
    </div>
  );
};

export default ListItem;
