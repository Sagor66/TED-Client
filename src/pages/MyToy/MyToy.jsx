import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const MyToy = () => {
  const newToys = useLoaderData();
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
                  <button className="btn btn-ghost btn-xs">
                    <FontAwesomeIcon
                      className="fa-xl text-green-500"
                      icon={faPenToSquare}
                    />
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <FontAwesomeIcon
                      className="fa-xl text-red-500"
                      icon={faTrash}
                    />
                  </button>
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
