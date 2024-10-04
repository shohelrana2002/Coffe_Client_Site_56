import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo, price } =
    coffee;

  const handleDelete = () => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card bg-base-100 mx-4 shadow-xl">
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <figure>
              <img src={photo} alt={photo} />
              <h2 className="card-title">{name}</h2>
              <p>${price}</p>
            </figure>
          </div>
          <div className="flex flex-col gap-y-2">
            {" "}
            <button className="btn text-white text-xl bg-[#D2B48C]">
              <FaEye />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn text-white text-xl bg-black">
                <FaEdit />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-white text-xl bg-red-500"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
