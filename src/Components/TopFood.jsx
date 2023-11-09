

const TopFood = ({topFood}) => {

    const {foodName,id,foodCategory,price,foodImage} =topFood




    return (
        <div>
       <div className="card  bg-base-100 shadow-xl">
  <figure className="h-[356px]"><img src={foodImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>{foodCategory}</p>
    <p>{price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Details</button>
    </div>
    
  </div>
  
</div>

    </div>
    );
};

export default TopFood;