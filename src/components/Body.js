import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, ENABLE_ACTUAL_API_CALL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfResturants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

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

    console.log("formattedRestaurants: ", formattedRestaurants);

    if (formattedRestaurants?.length == 0) {
      console.error(
        "Seems to be Swiggy API not working. set ENABLE_ACTUAL_API_CALL = false in constants.js"
      );
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

  const onLineStatus = useOnlineStatus();

  if (onLineStatus == false) {
    return (
      <div>
        <h1>You are offline </h1>
      </div>
    );
  }

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-orange-900"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn-search px-4 py-2 bg-orange-100 m-4 rounded-lg"
            onClick={() => {
              searchTextHandler();
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn btn-search px-4 py-2 bg-orange-400 m-4 rounded-lg"
            onClick={() => {
              const filteredRestuarants = listOfRestaurants.filter(
                (res) => res?.avgRating > 4
              );
              setFilteredRestuarants(filteredRestuarants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestuarants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="res-link"
          >
            {restaurant.avgRating < 4 ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
