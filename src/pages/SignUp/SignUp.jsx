import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photo.value;

    setError("");

    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        updateUserData(result.user, name, photoURL);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        if (password.length < 6) {
          setError(
            `Pass too short! Minimum 6 characters needed \n${error.message}`
          );
        } else {
          setError(error.message);
        }
        console.log(error.message);
      });

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => console.log("user name updated"))
        .catch((error) => {
          console.log(error.message);
        });
    };
  };
  return (
    <div className="pb-32 bg-gradient-to-r from-pink-500 to-indigo-500">
      <form
        onSubmit={handleSignUp}
        className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto mt-32"
      >
        <h2 className="text-heading mb-0 mt-10">Sign Up</h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn-primary">Sign Up</button>
          </div>
          <p className="text-right mt-3">
            Already have an account?{" "}
            <Link className="text-red-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
      <p className="text-sm text-red-600 max-w-sm mt-8">{error}</p>
    </div>
  );
};

export default SignUp;
