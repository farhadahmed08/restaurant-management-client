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
        <Link to="/allFood">All Food</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

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
            <div className="dropdown dropdown-end absolute">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
             <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
               <NavLink to="/"> <button className="btn btn-sm  btn-ghost text-center">
               My added food
                </button></NavLink>
              </li>
              <li>
              <NavLink to="/addedFood"><button className="btn btn-sm  btn-ghost">
              Add A food item
                </button></NavLink>
              </li>
              <li>
             <NavLink to="/myOrder"><button className="btn btn-sm  btn-ghost">
              My order
                </button></NavLink>
              </li>
            </ul>
           
            <button onClick={logOut}  className="btn btn-sm  btn-ghost relative bottom-3">Logout</button>
            
            </div>
           : 
           (
              <Link to='/login'>
              <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
          )
          }
        </div>
    </div>
  );
};

export default Navbar;
