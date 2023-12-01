import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4pntWK2/cover.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Fusion Cuisine with a Global Twist</h1>
            <p className="mb-5">Picture a menu inspired by the worlds culinary tapestry, where traditional dishes undergo a creative metamorphosis. Each plate tells a story of cultural fusion, bringing together ingredients and techniques from various corners of the globe. From the sizzling streets of Asia to the sun-kissed coasts of the Mediterranean, our kitchen is a passport to a world of gastronomic wonders.</p>
            <Link to="/allFood"><button className="btn btn-warning">Explore our Food</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;