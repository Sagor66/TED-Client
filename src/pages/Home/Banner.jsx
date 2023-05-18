import "./Banner.css";
import kid1 from "../../assets/banner/kid-pilot-1.png";
import kid2 from "../../assets/banner/kid-pilot-2.png";
import kid3 from "../../assets/banner/kid-pilot-3.png";

const Banner = () => {
  return (
    <div className="min-h-[700px] bg-banner relative flex items-center justify-center mb-32">
      <div>
        <h1 className="font-fredoka text-7xl font-bold text-white mb-5 text-center leading-tight">
          Explore <br /> Play <br /> Learn
        </h1>
        <p className="font-fredoka text-2xl font-semibold text-white text-center tracking-wider">
          Discover the World of Educational Toys
        </p>
      </div>
      <div>
        <div>
          <img className="w-96 absolute bottom-0 left-10" src={kid1} alt="" />
          <img
            className="w-[450px] absolute bottom-0 left-40"
            src={kid2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[450px] absolute bottom-0 right-10"
            src={kid3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
