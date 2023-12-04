import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import img from "../../assets/login/login.jpg";
import toast from "react-hot-toast";


const Register = () => {

    const { signInWithGoogle} = useContext(AuthContext);

    const [registerError,setRegisterError]=useState('');
    const [success,setSuccess] = useState("");


    const {createUser} = useContext(AuthContext);


    const handleSignUp =e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        console.log(name,email,password,image)
        e.target.reset()

        if (password.length <6) {
            setRegisterError(toast.error("password must be 6 digit"))
            return;
        }

        //reset error & success
    setRegisterError('');
    setSuccess("");
        
        // create user
        createUser(email,password)
        .then(result =>{
            
            console.log(result.user);
            setSuccess(toast.success("user added to the database"));

            //new user has been created;
        const createdAt = result.user?.metadata?.creationTime;
        const user = {email,createAt:createdAt};
        fetch('https://resturant-managment-server.vercel.app/users',{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })


        })
        .catch(error=>{
            console.log(error)
            setRegisterError(toast.error(error.message))
        })
        
    }



    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Register here</h1>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image Url"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <div onClick={ signInWithGoogle} className="form-control">
              <input className="btn btn-ghost" type="submit" value="Sign Up By Google" />
            </div>
            
            <p className="my-4 text-center">
              Already have an account?
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;