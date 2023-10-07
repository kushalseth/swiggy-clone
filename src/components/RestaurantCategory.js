import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  let outputCategory = [];
  const [showItems, setShowItems] = useState(false);
  debugger;

  data.categories.forEach((x) => (outputCategory = [...x.itemCards]));

  const handleClick = () => {
    setShowItems(!showItems);
  };

  debugger;
  return (
    <div className="accordion-container floa">
      <div className="w-6/12 bg-orange-300 shadow-lg p-4 mx-auto my-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/** Header */}
          <span className="font-bold text-lg">
            {data.title} ({outputCategory?.length})
          </span>
          <span> ⬇️ </span>
        </div>

        {/** Body */}
        {showItems && <ItemList items={outputCategory} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
