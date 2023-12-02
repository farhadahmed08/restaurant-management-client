import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";





const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddedFood = () => {

    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
      console.log(data);
      // image upload to imgbb and then get an url
      const imageFile = {image:data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers:{
              'content-type' : 'multipart/form-data'
          }
      });
      if (res.data.success) {
          //now send the menu item data to the server with the image url
          const addItem = {
              name : data.name,
              category:data.category,
              quantity:data.quantity,
              email:data.email,
              price:parseFloat(data.price),
              origin:data.origin,
              description:data.description,
              image:res.data.data.display_url
          }
          //
          const addRes = await axiosSecure.post('/foods',addItem)
          console.log(addRes.data) 
          if (addRes.data.insertedId) {
              // show success popup
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} is added to the menu`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
          
      }
      console.log('with image url',res.data);
  
    };
  




    return (
        <div>
             <SectionTitle
        heading="add an item"
        subHeading="What's new"
      ></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Enter Food Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name",{required:true})}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
              defaultValue="default"
                {...register("category",{required:true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drinks</option>
                <option value="drink">FastFood</option>
                <option value="drink">Others</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Enter Food Quantity*</span>
              </label>
              <input
                type="number"
                placeholder="quantity"
                {...register("quantity",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                readOnly
                placeholder={user.email}
                {...register("email",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Food Price"
                {...register("price",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Origin*</span>
              </label>
              <input
                type="Text"
                placeholder="Enter Food Origin(Country)"
                {...register("origin",{required:true})}
                className="input input-bordered w-full"
              />
            </div>
          
           
          
          </div>
              {/* recipe details */}
              <div className="form-control">
              <label className="label">
                <span className="label-text"> description</span>
                
              </label>
              <textarea
              {...register(' description')}
                className="textarea textarea-bordered h-24"
                placeholder=" description"
              ></textarea>
           </div>
           <div className="form-control w-full my-6">
           <input
           {...register('image',{required:true})} 
           type="file" className="file-input w-full max-w-xs" />
           </div>
          <button className="btn">
            Add Items <FaUtensils className="ml-4"/>
          </button>
        </form>
      </div>
        </div>
    );
};

export default AddedFood;