import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await res.json();
    setListOfRestaurants(data);
  };

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            console.log("Filter button clicked");
          }}
         >
         Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;