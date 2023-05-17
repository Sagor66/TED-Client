import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-5 shadow-lg">
      
        <div className="flex h-20 items-start">
          <img
            className="w-20 h-28 object-cover object-top"
            src="../../../public/logo.svg"
            alt=""
          />
          <div>
            <h2 className="font-fredoka font-bold text-5xl text-pink-500 tracking-wider">
              TED
            </h2>
            <small className="text-gradient bg-gradient-to-r from-pink-500 to-indigo-400 font-bold text-sm tracking-tight">TOY-EDUCATION</small>
          </div>
        </div>
      
      <div className="flex gap-5">
        <Link className="link-style text-hover" to="/">Home</Link>
        <Link className="link-style text-hover" to="">All Toys</Link>
        <Link className="link-style text-hover" to="">My Toys</Link>
        <Link className="link-style text-hover" to="">Add-A-Toy</Link>
        <Link className="link-style text-hover" to="">Blogs</Link>
      </div>
      <div>
        <h3>Pro Pic</h3>
      </div>
    </div>
  );
};

export default NavBar;
