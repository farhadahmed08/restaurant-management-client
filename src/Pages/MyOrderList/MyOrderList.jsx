import SectionTitle from "../../Components/SectionTitle";
import UseOrder from "../../hooks/UseOrder";
import SingleOrder from "./SingleOrder";



const MyOrderList = () => {

    const [order, refetch] = UseOrder()



    return (
        <div>
            <SectionTitle>
            subHeading={"From 11.00am to 10.00pm"}
        heading={"My Orders"}
            </SectionTitle>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
            {
                order?.map(singleOrder=><SingleOrder key={singleOrder._id} singleOrder={singleOrder}></SingleOrder>)
            }
            </div>
        </div>
    );
};

export default MyOrderList;