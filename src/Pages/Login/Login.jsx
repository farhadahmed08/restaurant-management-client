import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/login.jpg";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [success,setSuccess] = useState("");
    const [registerError,setRegisterError]=useState('');
    const navigate = useNavigate()
    const location = useLocation()
    console.log('location in the login page',location);
    const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {


    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(toast.success("good job"))
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(toast.error(error.message))
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign up!</h1>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="my-4 text-center">
              New to Restaurant Management ?
              <Link className="text-orange-600 font-bold" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
