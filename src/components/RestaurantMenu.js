import { React, useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-container">
      <div>
        <h1 className="font-bold text-2xl my-6 text-center">
          {resInfo?.info?.name}
        </h1>
      </div>
      <div className="font-bold text-lg text-center">
        {resInfo?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.info?.costForTwoMessage}
      </div>
      {/* accordions */}
      {resInfo?.menuItems?.map((item, index) => {
        return (
          <RestaurantCategory
            key={item?.card?.info?.id}
            data={item?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
