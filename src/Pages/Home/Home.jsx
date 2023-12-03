import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import TopFood from "../../Components/TopFood";
import SectionTitle from "../../Components/SectionTitle";
import About from "../../Components/About";
import AboutRestaurant from "../../Components/AboutRestaurant";

const Home = () => {
  const topFoods = useLoaderData();

  return (
    <div>
      <Banner />

      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Test Our Top Food"}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-5">
        {topFoods?.map((topFood) => (
          <TopFood key={topFood.id} topFood={topFood}></TopFood>
        ))}
      </div>
      <Link to="/allFood">
        {" "}
        <div className="flex items-center justify-center m-5">
          {" "}
          <button className="btn btn-outline btn-primary">Show All</button>
        </div>
      </Link>
      <SectionTitle
        subHeading={"Top Rated Chef"}
        heading={"About Our Chef"}
      ></SectionTitle>
      <About/>
      <SectionTitle
        subHeading={"Restaurant"}
        heading={"About Our Restaurant"}
      ></SectionTitle>
      <AboutRestaurant/>
    </div>
  );
};

export default Home;
