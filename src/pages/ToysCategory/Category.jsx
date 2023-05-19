import { Link } from "react-router-dom";


const Category = ({ categoryData }) => {

  const {
    _id,
    image,
    name,
    price,
    rating,
  } = categoryData;

  return (
    <div className="bg-gradient-to-br from-pink-100 to-indigo-100 p-4 rounded-lg hover:scale-105 ease-in duration-100">
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
          <p>
            Price: <span className="text-pink-500">${price}</span>
          </p>
          <p>
            Rating: <span className="text-pink-500">{rating}</span>
          </p>
        </div>
      </div>
      <button className="w-full btn-primary py-2 mb-2">
        <Link to={`/toy/${_id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Category;