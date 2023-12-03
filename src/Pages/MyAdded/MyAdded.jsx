import SectionTitle from "../../Components/SectionTitle";
import UseAdded from "../../hooks/UseAdded";


import SingleAdded from "./SingleAdded";


const MyAdded = () => {

    const [added, refetch]   =UseAdded()


    return (
        <div>
             <SectionTitle>
            subHeading={"From 11.00am to 10.00pm"}
        heading={"My Orders"}
            </SectionTitle>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
            {
                added?.map(singleAdded=><SingleAdded key={singleAdded._id} singleAdded={singleAdded}></SingleAdded>)
            }

           
            </div>
        </div>
    );
};

export default MyAdded;