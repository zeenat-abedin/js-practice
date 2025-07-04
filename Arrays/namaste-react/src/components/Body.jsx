import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const apiData = await res.json();
    setListOfRestaurants(apiData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text"
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            className="search-box"
          />
          <button onClick={() => console.log("Search button clicked")}>Search</button>
        </div>
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
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;