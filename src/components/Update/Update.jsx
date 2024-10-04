import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo, price } =
    coffee;
  const handleUpdateCoffee = (e) => {
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
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    // console.log(addCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          Swal.fire({
            title: "Success !",
            text: "Update Coffee SuccessFully",
            icon: "success",
            confirmButtonText: "Success",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdateCoffee}>
        <h1 className="text-5xl font-extrabold text-red-700 cursor-pointer  text-center">
          Add Coffee :{name}
        </h1>
        <div className="grid md:grid-cols-2 gap-y-5 md:gap-10 my-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              placeholder="Name here"
              className="input input-bordered gap-y-2 input-secondary w-full "
            />
          </div>
          <div>
            <label htmlFor="chef">Chef</label>
            <input
              type="text"
              defaultValue={chef}
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
              defaultValue={supplier}
              placeholder="Enter Supplier"
              className="input input-bordered gap-y-2 input-secondary w-full "
            />
          </div>
          <div>
            <label htmlFor="Taste">Taste</label>
            <input
              type="text"
              defaultValue={taste}
              name="taste"
              placeholder="Enter Taste"
              className="input input-bordered gap-y-2 input-secondary w-full "
            />
          </div>
          <div>
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              defaultValue={category}
              name="category"
              placeholder="Enter Category"
              className="input input-bordered gap-y-2 input-secondary w-full "
            />
          </div>
          <div>
            <label htmlFor="details">Details</label>
            <input
              type="text"
              defaultValue={details}
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
              defaultValue={photo}
              placeholder="Type here Link"
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="my-5">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              defaultValue={price}
              name="price"
              placeholder="Type here Price"
              className="input input-bordered input-secondary w-full "
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-info w-full"
        />
      </form>
    </div>
  );
};

export default Update;
