import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveRoute from "../../routes/ActiveRoute";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12 py-5 shadow-lg">
      <Link to='/'>
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
            <small className="text-gradient bg-gradient-to-r from-pink-500 to-indigo-400 font-bold text-sm tracking-tight">
              TOY-EDUCATION
            </small>
          </div>
        </div>
      </Link>

      <div className="flex flex-col md:flex-row items-center py-8 gap-5">
        <ActiveRoute className="text-primary-style text-hover" to="/">
          Home
        </ActiveRoute>
        <ActiveRoute className="text-primary-style text-hover" to="/all-toys">
          All Toys
        </ActiveRoute>
        {user && (
          <div className="flex flex-col md:flex-row items-center gap-5">
            <ActiveRoute className="text-primary-style text-hover" to="/my-toys">
              My Toys
            </ActiveRoute>
            <ActiveRoute className="text-primary-style text-hover" to="/add-toy">
              Add-A-Toy
            </ActiveRoute>
          </div>
        )}
        <ActiveRoute className="text-primary-style text-hover" to="/blogs">
          Blogs
        </ActiveRoute>
      </div>

      <div className="w-[300px]">
        {user ? (
          <div className="flex justify-center items-center gap-8">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <p className="w-[60px] h-[60px] text-red-600">
                  {user.displayName}
                </p>
              ) : (
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              )}
            </div>
            <button onClick={() => handleLogOut()} className="btn-primary">
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-7">
            <Link to="/signup">
              <button className="btn-primary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
