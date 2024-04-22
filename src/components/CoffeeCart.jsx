/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CoffeeCart = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, price, photo } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-72 h-72" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>chef : {chef}</p>
        <p>supplier : {supplier}</p>
        <p>Price : ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
