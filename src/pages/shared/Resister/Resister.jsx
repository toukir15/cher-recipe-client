import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Header from "../Header/Header";
import { updateProfile } from "firebase/auth";

export default function Resister() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { resister, loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleResister = (event) => {
    // prevent reload
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.image.value;

    setSuccess("");
    setError("");

    if (password.length < 6) {
      setError("Password less than 6 character");
      return;
    }

    //update user profile function
    const updateUserProfile = (resisterUser, displayName, photoURL) => {
      updateProfile(resisterUser.user, {
        photoURL,
        displayName,
      })
        .then((res) => {
          form.reset();
          setSuccess("User resister Successfully");
        })
        .catch((err) => {
          userSingOut();
        });
    };

    // function get email and password
    resister(email, password)
      .then((result) => {
        updateUserProfile(result, name, photoUrl);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="text-black bg-black">
        <Header />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Resister!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleResister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  className="border rounded border-gray-300"
                  type="url"
                  id="image"
                  name="image"
                ></input>

                <label className="label">
                  <p className="label-text-alt">
                    Already have an account?
                    <Link className="text-blue-500 link link-hover" to="/login">
                      Please Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Sing Up</button>
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
