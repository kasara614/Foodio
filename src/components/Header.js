import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a useSelector() hook provided by react-redux 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-[#e96034] text-white h-14 shadow-lg sticky top-0 z-10">
      <div className="logo-container ml-20">
        <Link to="/">
          <img
            className="w-14 h-14"
            src={require("../Assests/logo.png")} />
        </Link>
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>

          <li className="px-4">
            <Link to="/about">About </Link>
          </li>

          <li className="px-4 font-bold text-black text-xl ">
            <Link to="/cart">Cart 🛒{cartItems.length}</Link>
          </li>

          <button
            className="mr-4 "
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>

          <li className="mr-20">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Header;