import { React, useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-container">
      <div>
        <h1>{resInfo?.info?.name}</h1>
      </div>
      <div>
        <h5>
          {resInfo?.info?.cuisines?.join(",")} -{" "}
          {resInfo?.info?.costForTwoMessage}
        </h5>
      </div>
      <ul>
        {resInfo?.menuItems?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - RS. {item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
