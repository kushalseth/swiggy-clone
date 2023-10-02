import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfResturants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const enableActualApiCall = false;

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();
    const formattedRestaurants = buildRestaurantObject(json);
    setListOfResturants(formattedRestaurants);
    setFilteredRestuarants(formattedRestaurants);
  };

  const buildRestaurantObject = (json) => {
    let result = [];
    if (enableActualApiCall) {
      const cards = json?.data?.cards;
      let resData = [];

      for (var i = 0; i < cards?.length; i++) {
        if (
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            ?.length > 0
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
    } else {
      result = mockData;
    }

    return result;
  };

  const searchTextHandler = () => {
    console.log(searchText);
    debugger;
    const filteredRestuarants = listOfRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestuarants(filteredRestuarants);
  };

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn-search"
            onClick={() => {
              searchTextHandler();
            }}
          >
            Search
          </button>
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
      </div>

      <div className="res-container">
        {filteredRestuarants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
