import { LOGO_URL, EMPTY_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-orange-200 border-b-2 flex justify-between"
        >
          <div>
            <div className="py-2">
              <span> {item?.card?.info?.name} </span>
              <span> - ₹ {item?.card?.info?.price / 100} </span>
            </div>
            <p className="text-xs"> {item?.card?.info?.description} </p>
          </div>
          <div className="p-2">
            {item?.card?.info?.imageId ? (
              <img src={LOGO_URL + item?.card?.info?.imageId}></img>
            ) : (
              <img src={EMPTY_URL}></img>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
