import {  useState } from "react";
import SingleCard from "./SingleCard";
import useFoods from "../../hooks/useFoods";

import AllFoodBanner from "../../Components/AllFoodBanner";
import './AllFood.css';
import { useLoaderData } from "react-router-dom";


const AllFood = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const [itemsPerPage,setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [food] = useFoods(asc,search,currentPage,itemsPerPage);
  const {count} = useLoaderData()
  // const itemsPerPage = 10;
  console.log(count)
  const numberOfPages = Math.ceil(count/itemsPerPage)

  const pages = [...Array(numberOfPages).keys()];




  // const [allFoods, setAllFoods] = useState([]);

  // const allFoods = useFoods(asc, search);

  // const Foods = useLoaderData() ;
  // console.log(Foods)

  // useEffect(()=>{

  // fetch(`http://localhost:5000/services?sort=${asc?'asc' : 'des'}&search=${search}`)
  // .then((res) => res.json())
  //   .then((data) => setSearch(data));

  //         fetch("http://localhost:5000/foods")
  //   .then((res) => res.json())
  //   .then((data) => setAllFoods(data));

  // },[]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    console.log(searchText);
    setSearch(searchText);
  };

  const handleItemsPerPage = e =>{
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val)
    setCurrentPage(0)
  }

  const handlePreviousPage=()=>{
    if (currentPage>0) {
      setCurrentPage(currentPage-1)
    }
  }
  const handleNextPage=()=>{
    if (currentPage<pages.length-1) {
      setCurrentPage(currentPage+1)
    }
  }

  return (
    <div className="mt-6">
      {/* <div className="mb-6 flex items-center justify-center" >
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          </div> */}
      <div>
       <AllFoodBanner/>
      </div>
      <form className="text-center mt-6" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input type="submit" value="search" className="btn btn-ghost " />
      </form>
      <button className="btn btn-secondary m-5" onClick={() => setAsc(!asc)}>
        {asc ? "Price: Low to High" : "Price: High to Low"}
      </button>

      {/* <select className="select select-bordered w-full max-w-xs m-10">
        <option disabled defaultValue="Filter By">
          Filter By
        </option>
        <option>Price Low to High</option>
        <option>Price High To Low</option>
      </select> */}
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {food?.map((foods) => (
          <SingleCard key={foods._id} foods={foods}></SingleCard>
        ))}
      </div>
      <div className="pagination">
      {/* <div className="join flex justify-center items-center m-10">
  <input className="join-item btn " type="radio" name="options" aria-label="1"  />
  <input className="join-item btn " type="radio" name="options" aria-label="2" />
  <input className="join-item btn " type="radio" name="options" aria-label="3" />
  <input className="join-item btn " type="radio" name="options" aria-label="4" />
</div> */}

<p>current Page:{currentPage}</p>
<button onClick={handlePreviousPage}>Previous</button>
      {
        pages.map(page=><button
        className={currentPage === page ? 'selected':undefined}
         onClick={()=>setCurrentPage(page)} 
        key={page}>{page}</button>)
      }
      <button onClick={handleNextPage}>Next</button>
       <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

      </div>
    </div>
  );
};

export default AllFood;
