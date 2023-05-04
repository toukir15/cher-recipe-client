import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ActiveRoute from "../../ActiveRoute/ActiveRoute";

export default function Header() {
  const { loginUser, userSingOut } = useContext(AuthContext);
  return (
    <div className="navbar container mx-auto text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl ">Recipe Avenue</a>
      </div>
      <div className="flex-none text-gray-300">
        <ul className="md:flex gap-6 px-1">
          <li>
            <ActiveRoute to="/">
              <a>Home</a>
            </ActiveRoute>
          </li>
          <li className="mr-6">
            <ActiveRoute to="/blog">
              <a>Blog</a>
            </ActiveRoute>
          </li>
        </ul>
        {loginUser ? (
          <div className="flex gap-4">
            <div title={loginUser.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={loginUser.photoURL} />
                </div>
              </label>
            </div>
            <div className="" onClick={() => userSingOut()}>
              <button className="btn btn-warning">SignOut</button>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-warning">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
}
