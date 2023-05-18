import img1 from "../../assets/banner/kid-pilot-1.png";
import img2 from "../../assets/banner/kid-pilot-2.png";
import toy1 from "../../assets/gallery/toy1.jpg";
import toy2 from "../../assets/gallery/toy2.jpg";
import toy3 from "../../assets/gallery/toy3.jpg";
import toy4 from "../../assets/gallery/toy4.jpg";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2>Galary</h2>
      <div className="grid grid-cols-5 gap-4">
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 row-span-2 col-span-2">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 row-span-3">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 col-span-2">
          <img className="object-cover w-full h-full" src={toy4} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700">
          <img className="object-cover w-full h-full" src={toy3} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 row-span-3">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700">
          <img className="object-cover w-full h-full" src={toy2} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 row-span-2">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
        <div className="min-w-[200px] min-h-[200px] bg-slate-700 col-span-3">
          <img className="object-cover w-full h-full" src={toy1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
