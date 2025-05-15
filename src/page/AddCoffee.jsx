import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // form.reset();
        }
      });
  };

  return (
    <div className="p-24">
      <form
        onSubmit={handleAddCoffee}
        action=""
        className="bg-base-200 border-base-300 rounded-box  border"
      >
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Add Coffee</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <fieldset className="fieldset  p-4  md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
                name="name"
              />
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee quantity"
                name="quantity"
              />
            </div>

            {/* Supplier */}
            <div className="space-y-1.5">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
                name="supplier"
              />
            </div>

            {/* Taste */}
            <div className="space-y-1.5">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
                name="taste"
              />
            </div>

            {/* Price */}
            <div className="space-y-1.5">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee price"
                name="price"
              />
            </div>

            {/* Details */}
            <div className="space-y-1.5">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee Details"
                name="details"
              />
            </div>
          </fieldset>
          <fieldset className="fieldset px-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
              name="photo"
            />
          </fieldset>
        </div>
        <div className="px-4 py-10">
          <input
            type="submit"
            className="btn-block btn "
            placeholder="Add Coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
