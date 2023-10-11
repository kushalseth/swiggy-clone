import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    await fillResInfo(json);
    return resInfo;
  };

  const fillResInfo = (json) => {
    // filling resInfo
    const info = json?.data?.cards[0]?.card?.card?.info;
    const menuItems =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    const filteredCategories =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        //||
        //  c.card?.card["@type"] ==
        //  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );

    setResInfo({ info: info, menuItems: filteredCategories });
  };
  return resInfo;
};

export default useRestaurantMenu;
