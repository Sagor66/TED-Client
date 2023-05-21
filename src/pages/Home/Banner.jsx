import "./Banner.css";
import kid1 from "../../assets/banner/kid-pilot-1.png";
import kid2 from "../../assets/banner/kid-pilot-2.png";
import kid3 from "../../assets/banner/kid-pilot-3.png";

const Banner = () => {
  return (
    <div className="min-h-[700px] bg-banner relative flex items-center justify-center mb-32">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
      >
        <h1 className="font-fredoka text-8xl font-bold text-white mb-5 text-center leading-tight">
          Explore <br /> Play <br /> Learn
        </h1>
        <p className="font-fredoka text-3xl font-semibold text-white text-center tracking-wider">
          Discover the World of Educational Toys
        </p>
      </div>
      <div>
        <div>
          <img
            className="w-96 absolute bottom-0 left-10 hidden md:block"
            src={kid1}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <img
            className="w-[450px] absolute bottom-0 left-40 hidden md:block"
            src={kid2}
            alt=""
            data-aos="fade-right"
            data-aos-duration="2200"
          />
        </div>
        <div>
          <img
            className="h-[450px] absolute bottom-0 right-10 hidden md:block"
            src={kid3}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
