import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import TopFood from "../../Components/TopFood";


const Home = () => {

    const topFoods = useLoaderData();


    return (
        <div >
            <Banner/>
            <div className="text-center m-6">
            <h3 className="text-orange-600 text-2xl font-bold">Best Food</h3>
           
                 
            </div>
            <div className="grid grid-cols-2 gap-5">
           
           {
               topFoods?.map(topFood=><TopFood key={topFood.id} topFood={topFood}></TopFood>)
           }
       </div>
     <Link to="/allFood"> <div className="flex items-center justify-center m-5"> <button className="btn btn-primary  ">Show All</button></div></Link>
        </div>
    );
};

export default Home;