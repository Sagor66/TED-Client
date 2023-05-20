import toy1 from "../../assets/gallery/toy1.jpg";
import toy2 from "../../assets/gallery/toy2.jpg";
import toy3 from "../../assets/gallery/toy3.jpg";
import toy4 from "../../assets/gallery/toy4.jpg";
import toy8 from "../../assets/gallery/toy8.jpg";
import toy9 from "../../assets/gallery/toy9.jpg";
import toy10 from "../../assets/gallery/toy10.jpg";
import toy11 from "../../assets/gallery/toy11.jpg";
import toy12 from "../../assets/gallery/toy12.png";

const Gallery = () => {
  return (
    <div className="mb-32">
      <h2 className="text-heading ">Toyland Treasures</h2>
      <div className="grid md:grid-cols-5 gap-4 shadow-2xl p-10 rounded-xl bg-gradient-to-br from-pink-100 to-indigo-100">
        <div className="min-w-[200px] min-h-[200px] row-span-2 md:col-span-2">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy12} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] row-span-3">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] md:col-span-2">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy4} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px]">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy3} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] row-span-3">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy10} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px]">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy9} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px]">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy2} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] row-span-2">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy11} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] md:col-span-3">
          <img className="object-cover w-full h-full border-4 border-white rounded-xl hover:scale-105 ease-in duration-500" src={toy8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
