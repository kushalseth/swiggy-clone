import { React, useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);

    const json = await data.json();

    fillResInfo(json);

    resInfo?.menuItems?.map((item) => {
      console.log("log kk ", item?.card?.info?.name);
    });

    console.log(JSON.stringify(resInfo));
  };

  const fillResInfo = (json) => {
    // filling resInfo
    const info = json?.data?.cards[0]?.card?.card?.info;
    const menuItems =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    setResInfo({ info: info, menuItems: menuItems });
  };

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
