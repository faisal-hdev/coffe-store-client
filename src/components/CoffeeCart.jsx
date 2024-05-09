/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, price, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log("handle deleted", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-six-eta.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 bg-[#F5F4F1] shadow-sm rounded-xl">
      <figure>
        <img
          className="w-[400px] p-3 h-[280px] rounded-3xl"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-center items-center w-full gap-10 p-3">
        <div className="space-y-2">
          <h2 className="text-xl">{name}</h2>
          <h2>chef : {chef}</h2>
          <h2>supplier : {supplier}</h2>
          <h2>Price : ${price}</h2>
        </div>
        <div className="flex flex-col gap-4 ">
          <Link
            className="btn btn-sm btn-accent text-white"
            to={`updateCoffee/${_id}`}
          >
            <button className="">Edit</button>
          </Link>
          <button className="btn btn-sm btn-info text-white">View</button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm text-white btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
