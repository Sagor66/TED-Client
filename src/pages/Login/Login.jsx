import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError("");

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="pb-32 bg-gradient-to-r from-pink-500 to-indigo-500">
      <Helmet>
        <title>TED | Login</title>
      </Helmet>
      <form
        onSubmit={handleLogin}
        className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto mt-32"
      >
        <h2 className="text-heading mb-0 mt-10">Login</h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue="sagor@gmail.com"
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
              defaultValue="123123"
            />
          </div>
          <p className="text-right mt-3">
            Don't have an account?{" "}
            <Link className="text-red-600" to="/signup">
              Sign up
            </Link>
          </p>
          <div className="form-control mt-6">
            <button className="btn-primary">Login</button>
          </div>
          <p className="text-sm text-red-600 max-w-sm mt-3">{error}</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 mb-10">
          <p className="text-indigo-500 font-bold">Sign-in with</p>
          <div>
            <button onClick={() => handleGoogleSignIn()}>
              <FontAwesomeIcon className="icon fa-xl text-white bg-gradient-to-r from-pink-500 to-indigo-500 p-4 mr-4 rounded-full" icon={faGoogle} />
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Login;
