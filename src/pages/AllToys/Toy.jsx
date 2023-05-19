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
    <div className="bg-gradient-to-br from-pink-100 to-indigo-100 p-4 rounded-lg hover:scale-105 ease-in duration-200">
      <img
        className="w-80 h-52 object-cover mb-5 rounded-lg border-2 border-white"
        src={image}
        alt=""
      />
      <div className="ml-1">
        <h4 className="font-fredoka text-lg font-bold tracking-wide mb-2">
          {name}
        </h4>
        <div className="font-semibold text-sm space-y-1 mb-5">
          <p>Seller: {seller.name}</p>
          <p>Category: {subCategory}</p>
          <p>
            Price: <span className="text-pink-500">${price}</span>
          </p>
          <p>
            Available: <span className="text-pink-500">{quantity}</span>
          </p>
        </div>
      </div>
      <button className="w-full btn-primary py-2 mb-2">
        <Link to={`/toy/${_id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Toy;
