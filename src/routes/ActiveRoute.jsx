import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-primary-style text-white bg-gradient-to-br from-pink-500 to-indigo-400"
            : "text-primary-style text-hover"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveRoute;
