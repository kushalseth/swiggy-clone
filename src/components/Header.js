import { useState, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    setBtnName(btnName == "Login" ? "Logout" : "Login");
  };

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div>
      <div className="flex justify-between bg-orange-100 shadow-sm m-2">
        <div className="logo-container p-4 m-4">
          <img className="w-56" src={CDN_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              Cart
            </li>
            <li className="px-4 py-3 rounded-2xl hover:bg-orange-300 text-center">
              <button
                onClick={() => {
                  handleLogin();
                }}
              >
                {btnName}
              </button>
            </li>          
            <li className="px-4 py-3">{data?.LoggedInUser}</li>
            <li className="px-4 py-3">
              {onlineStatus == true ? "✅ Online" : "🔴 Offline"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
