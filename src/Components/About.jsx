import chef from "../assets/chef.jpg";
import food from "../assets/food.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
          src={chef}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={food}
          className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
        />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl text-orange-500 font-bold">About chef</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed.
          </p>
         
         
        </div>
      </div>
    </div>
    );
};

export default About;