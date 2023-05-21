import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
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
    <div className="max-w-7xl mx-auto mb-32">
      <Helmet>
        <title>TED | {name}</title>
      </Helmet>
      <h2 className="font-fredoka text-4xl font-bold tracking-wide text-gradient bg-gradient-to-r from-pink-500 to-indigo-500 text-center mt-20 mb-10">
        {name}
      </h2>
      <div className="flex items-center justify-around gap-16">
        <div className="max-w-xl p-12 rounded-xl bg-gradient-to-br from-pink-100 to-indigo-100">
          <img
            className="rounded-lg shadow-2xl shadow-indigo-900 hover:scale-150 ease-in duration-200"
            src={image}
            alt=""
          />
        </div>
        <div className="max-w-lg">
          <div className="font-bold text-lg text-slate-500 space-y-2 border-l-8 pl-8 py-10 rounded-lg ">
            <p>
              Category: <span className="font-normal">{subCategory}</span>
            </p>
            <p>
              Description: <span className="font-normal">{description}</span>
            </p>
            <p>
              Seller Name: <span className="font-normal">{seller.name}</span>
            </p>
            <p>
              Seller Email: <span className="font-normal">{seller.email}</span>
            </p>
            <p>
              Price: <span className="font-normal text-pink-500">${price}</span>
            </p>
            <p>
              Available:{" "}
              <span className="font-normal text-pink-500">{quantity}</span>
            </p>
            <p>
              Rating: <span className="font-normal">{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
