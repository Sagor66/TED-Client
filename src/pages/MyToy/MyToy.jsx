import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./MyToy.css";

const MyToy = () => {
  const [newToys, setNewToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newToys")
      .then((res) => res.json())
      .then((data) => setNewToys(data));
  }, []);

  const handleUpdate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedData = { price, quantity, details };

    console.log(updatedData);

    fetch(`http://localhost:5000/newToys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = newToys.filter((newToy) => newToy._id !== id);
          const updated = newToys.find((newToy) => newToy._id === id);
          const updatedData = [updated, ...remaining];
          setNewToys(updatedData);
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/newToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sending data from MyToy via DELETE ", data);
          if (data.deleteCount > 0) {
            alert("deleted successfully");
            const remaining = newToys.filter((newToy) => newToy._id !== id);
            setNewToys(remaining);
          }
        });
    }
  };
  console.log(newToys);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-heading mt-16">My Toys</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Sub-Category</th>
              <th>Details</th>
              <th>Seller Name</th>
              <th>Seller E-mail</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {newToys.map((toy) => (
              <tr key={toy._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img className="w-10" src={toy.photo} alt="" />
                    </div>
                  </div>
                </td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.details}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>{toy.rating}</td>
                <th>
                  <label htmlFor="my-modal-6" className="">
                    <FontAwesomeIcon
                      className="fa-xl text-green-500"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      id="my-modal-6"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <form
                          onSubmit={(event) => handleUpdate(event, toy._id)}
                          className="card flex-shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 mx-auto"
                        >
                          <div className="card-body">
                            <div className="grid grid-cols-2 gap-5">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Price</span>
                                </label>
                                <input
                                  type="text"
                                  name="price"
                                  placeholder="price"
                                  className="input input-bordered"
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Available Quantity
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="quantity"
                                  placeholder="quantity"
                                  className="input input-bordered"
                                />
                              </div>
                            </div>
                            <div className="form-control col-span-4">
                              <label className="label">
                                <span className="label-text">Details</span>
                              </label>
                              <input
                                type="text"
                                name="details"
                                placeholder="details"
                                className="input input-bordered"
                              />
                            </div>
                          </div>
                          <div className="form-control mb-8 w-1/2 mx-auto">
                            <button type="submit" className="btn-primary">
                              Confirm
                            </button>
                          </div>
                        </form>
                        <div className="modal-action">
                          <label
                            htmlFor="my-modal-6"
                            className="btn bg-red-500 border-0"
                          >
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <label onClick={() => handleDelete(toy._id)} className="">
                    <FontAwesomeIcon
                      className="fa-xl text-red-500"
                      icon={faTrash}
                    />
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
