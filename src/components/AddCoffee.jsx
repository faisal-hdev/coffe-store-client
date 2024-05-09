/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    form.reset();
    // console.log(newCoffee);

    // send data to the server
    fetch("https://coffee-store-server-six-eta.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto p-8 lg:p-24 ">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
        Add New coffee
      </h2>
      <Link to="/">
        <button>back to home</button>
      </Link>
      <div className="bg-[#F4F3F0] p-8 lg:p-24">
        <form onSubmit={handleAddCoffee}>
          <div className="flex flex-col md:flex-row md:gap-6 justify-center">
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Name</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="name"
                required
                placeholder="Enter Your coffee name"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Chef</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="chef"
                required
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 justify-center">
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Supplier</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="supplier"
                required
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Taste</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="taste"
                required
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 justify-center">
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Category</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="category"
                required
                placeholder="Enter coffee category"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 md:w-1/2 w-full">
              <label className="md:text-lg mb-1">Details</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="details"
                required
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 justify-center">
            <div className="flex flex-col mb-4 md:mb-8 w-full">
              <label className="md:text-lg mb-1">Photo</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="photo"
                required
                placeholder="Enter Your Photo_URL"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 w-full">
              <label className="md:text-lg mb-1">Price</label>
              <input
                className="w-full p-3 rounded"
                type="text"
                name="price"
                required
                placeholder="Enter Your Coffee price"
              />
            </div>
          </div>
          <button className="p-3 mt-3 text-[#331A15] font-semibold hover:bg-black hover:text-white duration-300 w-full bg-[#D2B48C] text-[16px] rounded border-2 border-[#331A15]">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
