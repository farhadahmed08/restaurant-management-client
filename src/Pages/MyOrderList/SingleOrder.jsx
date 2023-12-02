import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseOrder from "../../hooks/UseOrder";

const SingleOrder = ({ singleOrder }) => {
  const { user } = useAuth();
  const { email, name, image, price,_id } = singleOrder;
  const axiosSecure = useAxiosSecure();
  const [order, refetch] = UseOrder();

  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        

        axiosSecure.delete(`/orderItems/${id}`)
        .then(res=>{
            console.log(res)
            if (res.data.deletedCount > 0) {
                  Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
            refetch()
        })


        }
      });

  }




  return (
    <div>
      <div className="card bg-base-100 shadow-xl m-5">
        <figure>
          <img className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{price}</p>
          <div  className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
