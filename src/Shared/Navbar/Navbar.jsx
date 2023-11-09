import logo from "../../assets/logo.png"
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);



  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <Link to="/allFood">All Food</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    
      {user && (
            <>
              <li>
                <NavLink to="/addFood">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/myOrder">My Cart</NavLink>
              </li>
              <li>
            <NavLink to="/updateFood">Update Food</NavLink>
          </li>
              {/* <li>
            <NavLink to="/profile">Product Details</NavLink>
          </li> */}
            </>
          )}
    </>
  );

  return (
    <div className="navbar bg-orange-400">
      <div className="w-20 rounded-full">
        {" "}
        <img src={logo} alt="" />
      </div>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
          {user?.email ? 
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    Farhad
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
           : (
              <Link to='/login'>
              <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
          )}
        </div>
    </div>
  );
};

export default Navbar;
