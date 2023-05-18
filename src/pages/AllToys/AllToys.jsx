import { useEffect, useState } from "react";
import Toy from "./Toy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [searched, setSearched] = useState(false)
  const [searchedProduct, setSearchProduct] = useState("");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTabValue = event.target.search.value;
    setSearchProduct(searchTabValue);
    event.target.reset()
  };

  const handleBackButton = () => {
    setSearched(!searched)
  }

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        if (!showMore) {
          setToys(data.slice(0, 20));
        } else {
          setToys(data);
        }
      });
  }, [showMore]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        const searchedData = data.find((i) => i.name === searchedProduct);
        if (searchedData) {
          setToys([searchedData])
        }

        if (!searched) {
          setToys(data.slice(0, 20))
        }
      });
  }, [searchedProduct, searched]);

  return (
    <div className="max-w-7xl mx-auto my-32 flex flex-col items-center">
      <h2 className="text-heading">Toyland</h2>
      <form onSubmit={handleSearch} className="form-control mb-16">
        <div className="input-group">
          <input
            type="text"
            name="search"
            placeholder="Search Toys Here.."
            className="input input-bordered border-2 border-pink-500 w-96"
          />
          <button onClick={handleBackButton} className="btn btn-square bg-pink-500 border-2 border-pink-500 hover:bg-pink-600 hover:border-pink-600">
            {
              searched ? <FontAwesomeIcon className="fa-xl text-white" icon={faArrowLeft} /> : <FontAwesomeIcon className="fa-xl text-white" icon={faSearch} />
            }
          </button>
        </div>
      </form>
      <div className="grid grid-cols-4 gap-4 justify-between items-center">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
      {showMore ? (
        <button onClick={handleShowMore} className="btn-primary mt-20">
          Show Less
        </button>
      ) : (
        <button onClick={handleShowMore} className="btn-primary mt-20">
          Show More
        </button>
      )}
    </div>
  );
};

export default AllToys;
