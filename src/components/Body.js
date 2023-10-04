import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, ENABLE_ACTUAL_API_CALL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfResturants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const enableActualApiCall = ENABLE_ACTUAL_API_CALL;

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();
    const formattedRestaurants = buildRestaurantObject(json);

    if(formattedRestaurants?.length == 0) {
      console.error("Seems to be Swiggy API not working. set ENABLE_ACTUAL_API_CALL = false in constants.js")
    }
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
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="res-link"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
