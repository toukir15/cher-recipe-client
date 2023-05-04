import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Header from "../Header/Header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import app from "../../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export default function LogIn() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn, setUser, loginUser, auth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle sign in with email and password
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    setSuccess("");
    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        setUser(loggedUser);
        setSuccess("User LoggedIn Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  console.log(navigate);

  // handle google
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        loginUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle github
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        loginUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="text-black bg-black">
        <Header />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div
              onClick={handleGoogleSignIn}
              className="mt-6 flex justify-center items-center gap-2 border border-gray-400 py-2 mx-8 cursor-pointer rounded-md"
            >
              <FcGoogle className="text-2xl" /> <p>Login with Google</p>
            </div>
            <div
              onClick={handleGithubSignIn}
              className="mt-2 flex justify-center items-center gap-2 border border-gray-400 py-2 mx-8 cursor-pointer rounded-md"
            >
              <FaGithub className="text-2xl" /> <p>Login with Github</p>
            </div>

            <p className="text-center pt-3">or</p>
            <form onSubmit={handleSignIn} className="card-body pt-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    New to this website?
                    <Link
                      className="text-blue-500 link link-hover"
                      to="/resister"
                    >
                      Please Resister
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              {success ? <p className="text-green-600">{success}</p> : ""}
              {error ? <p className="text-red-600">{error}</p> : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
