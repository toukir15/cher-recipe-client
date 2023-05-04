import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

export default function Header() {
  const { loginUser, userSingOut } = useContext(AuthContext);
  return (
    <div className="navbar container mx-auto text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a>Blog</a>
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
            <div onClick={() => userSingOut()}>
              <button className="btn btn-primary">SignOut</button>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
}
