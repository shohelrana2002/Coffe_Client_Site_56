import React from "react";
import Swal from "sweetalert2";
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
    const addCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    console.log(addCoffee);

    // send to server site
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success !",
            text: "Coffee Add SuccessFully",
            icon: "success",
            confirmButtonText: "Success",
          });
        }
      });
  };
  return (
    <form onSubmit={handleAddCoffee}>
      <h1 className="text-5xl font-extrabold text-red-700 cursor-pointer  text-center">
        Add Coffee{" "}
      </h1>
      <div className="grid md:grid-cols-2 gap-y-5 md:gap-10 my-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name here"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div>
          <label htmlFor="chef">Chef</label>
          <input
            type="text"
            name="chef"
            placeholder="Enter coffee chef"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div>
          <label htmlFor="supplier">Supplier</label>
          <input
            type="text"
            name="supplier"
            placeholder="Enter Supplier"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div>
          <label htmlFor="Taste">Taste</label>
          <input
            type="text"
            name="taste"
            placeholder="Enter Taste"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div>
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <input
            type="text"
            name="details"
            placeholder="Enter Details"
            className="input input-bordered gap-y-2 input-secondary w-full "
          />
        </div>
        <div className="my-5">
          <label htmlFor="photo">Photo Url</label>
          <input
            type="text"
            name="photo"
            placeholder="Type here Link"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="my-5">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Type here Price"
            className="input input-bordered input-secondary w-full "
          />
        </div>
      </div>

      <input type="submit" value="Add Coffee" className="btn btn-info w-full" />
    </form>
  );
};

export default AddCoffee;
