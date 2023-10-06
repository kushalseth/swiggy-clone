import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props?.resData;

  return (
    <div className="res-card m-4 p-4 w-[250px] h-[420px] bg-gray-100 hover:bg-orange-200 rounded-2xl">
      <img
        className="res-logo h-52 w-[250px] rounded-2xl"
        src={LOGO_URL + cloudinaryImageId}
      />
      <div className="p-1 m-1">
        <h3 className="font-bold text-center py-3 text-slate-700">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
