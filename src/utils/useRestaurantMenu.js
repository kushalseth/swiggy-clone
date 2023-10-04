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

    setResInfo({ info: info, menuItems: menuItems });
  };
  return resInfo;
};

export default useRestaurantMenu;
