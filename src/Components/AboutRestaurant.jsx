import about from "../assets/about.jpg";

const AboutRestaurant = () => {
    return (
        <div className="hero min-h-screen bg-base-200 m-5">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="lg:w-1/2 space-y-5 p-4">
              <h3 className="text-3xl text-orange-500 font-bold">About Restaurant</h3>
            <h1 className="text-5xl font-bold">We Maintain good Hygiene for Quality</h1>
            <p className="py-6">
            All staff must wash and dry their hands thoroughly before they handle food. Additionally, spilt food, used equipment, and crockery must be cleared away after use.
            </p>
           
           
          </div>
          <div className="lg:w-1/2 ">
          <img
            src={about}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          
          </div>
        </div>
      </div>
    );
};

export default AboutRestaurant;