import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import ContactUs from "./ContactUs";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems?.length > 0 && (
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={clear}
            >
              Clear Cart
            </button>
          ) && <ItemList items={cartItems} />}
        {cartItems?.length == 0 && (
          <h2 className="p-2 m-2 text-lg"> Your cart is empty </h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
