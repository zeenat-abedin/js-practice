import RestaurantCard from "./RestaurantCard";
import listOfRestaurants from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            console.log("Filter button clicked");
          }}
         >Top Rated Restaurants</button>
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