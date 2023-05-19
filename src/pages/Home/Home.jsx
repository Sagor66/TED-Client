import ToysCategory from "../ToysCategory/ToysCategory";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto ">
        <Gallery></Gallery>
        <ToysCategory></ToysCategory>
      </div>
    </div>
  );
};

export default Home;
