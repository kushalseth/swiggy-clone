import { LOGO_URL, EMPTY_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-orange-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item?.card?.info?.name} </span>
              <span> - ₹ {item?.card?.info?.price / 100} </span>
            </div>
            <p className="text-xs"> {item?.card?.info?.description} </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 float-right bg-black text-white shadow-lg mx-16 rounded-lg">
                Add +
              </button>
            </div>
            {item?.card?.info?.imageId ? (
              <img
                src={LOGO_URL + item?.card?.info?.imageId}
                className="w-full"
              ></img>
            ) : (
              <img src={EMPTY_URL} className="w-full"></img>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
