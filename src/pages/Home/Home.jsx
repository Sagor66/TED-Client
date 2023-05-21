import { Helmet } from "react-helmet";
import ToysCategory from "../ToysCategory/ToysCategory";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ParentsCommunity from "./ParentsCommunity";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TED | Toy-Education</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto ">
        <Gallery></Gallery>
        <ToysCategory></ToysCategory>
        <Testimonials></Testimonials>
        <ParentsCommunity></ParentsCommunity>
      </div>
    </div>
  );
};

export default Home;
