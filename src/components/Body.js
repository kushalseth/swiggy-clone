import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();
    const formattedRestaurants = buildRestaurantObject(json);
    setListOfResturants(formattedRestaurants);
  };

  const buildRestaurantObject = (json) => {
    const cards = json?.data?.cards;
    let resData = [];
    let result = [];

    for (var i = 0; i < cards?.length; i++) {
      if (
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length >
        0
      ) {
        resData =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        break;
      }
    }

    if (resData?.length > 0) {
      resData.forEach((restaurant) => {
        result.push(restaurant?.info);
      });
    }

    return result;
  };

  if (listOfRestaurants?.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            tt = resData.filter((x) => x.avgRating > 4);
            setListOfResturants(tt);
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
