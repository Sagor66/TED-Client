import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const {
    _id,
    image,
    name,
    description,
    price,
    quantity,
    rating,
    seller,
    subCategory,
  } = toy;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img className="w-10" src={image} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>
        {seller.name}
        <br />
        {seller.email}
      </td>
      <td>{price}</td>
      <td>{quantity}</td>

      <th>
        <button className="w-full btn-primary py-2 mb-2">
          <Link to={`/toy/${_id}`}>View Details</Link>
        </button>
      </th>
    </tr>
  );
};

export default Toy;
