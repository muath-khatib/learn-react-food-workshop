import React from "react";

const Card = ({ id, name, price, category, description }) => {
  return (
    <li className="card" key={id}>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>${price}</p>
      <p>{category}</p>
    </li>
  );
};
export default Card;
