import { useEffect, useState } from "react";
import { PROXY_URL, MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  // fetch the data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(PROXY_URL + MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;