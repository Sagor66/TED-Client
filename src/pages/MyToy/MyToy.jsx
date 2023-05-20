import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import "./MyToy.css";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';

const MyToy = () => {
  const { user } = useContext(AuthContext)
  const [newToys, setNewToys] = useState([]);

  const url = `http://localhost:5000/newToys?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewToys(data));
  }, [url]);

  const notifyUpdate = () => toast.success('Updated Successfully')
  const notifyDelete = () => toast.success('Deleted Successfully')

  const handleUpdate = (event, id) => {
    event.preventDefault();
    // console.log(id)
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedData = { price, quantity, description };

    // console.log(updatedData);

    fetch(`http://localhost:5000/newToys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          notifyUpdate()
          const remaining = newToys.filter((newToy) => newToy._id !== id);
          const updated = newToys.find((newToy) => newToy._id === id);
          console.log(updated)
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
          // console.log("sending data from MyToy via DELETE ", data);
          if (data.deleteCount > 0) {
            notifyDelete()
            const remaining = newToys.filter((newToy) => newToy._id !== id);
            setNewToys(remaining);
          }
        });
    }
  };

  

  // console.log(newToys);

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
                      <img className="w-10" src={toy.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.description}</td>
                <td>{toy.seller.name}</td>
                <td>{toy.seller.email}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>{toy.rating}</td>
                <th>
                  <label htmlFor={toy._id} className="">
                    <FontAwesomeIcon
                      className="fa-xl text-green-500"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      id={toy._id}
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
                                name="description"
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
                            htmlFor={toy._id}
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
