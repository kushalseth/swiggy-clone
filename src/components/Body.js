import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfResturants] = useState(resData);

  // normal JS variable
  let tt = resData;
  // setListOfResturants(resData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            debugger;
            console.log("before: ", tt);
            tt = resData.filter((x) => x.avgRating > 4);
            setListOfResturants(tt);
            console.log("after: ", tt);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
