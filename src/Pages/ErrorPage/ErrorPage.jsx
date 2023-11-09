import { Link } from "react-router-dom";




const ErrorPage = () => {
    return (
        <div>
            <h2>this is error page</h2>
            <Link to='/'>
              <button className="btn btn-sm  btn-primary">Login</button>
          </Link>
        </div>
    );
};

export default ErrorPage;