import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(params);

  /*custom hooks 
   takes out the fetch data logic from this component, so that this component has a single responsibility to show only restaurant menu on UI
   */

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  /*
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(PROXY_URL + MENU_API + resId);
    console.log(data);


    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };    
  */

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo || resInfo === null) return <Shimmer />;

  // const { name } = resInfo?.cards[2]?.card?.card?.info;
  // use fallback default value using || {} to avoid issues while destructuring next time😊
  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

  console.log(itemCards);
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);


  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-5xl">{name}</h1>
      <h3 className="font-bold text-xl">Rated {avgRating} ⭐</h3>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}  - {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} -  &#8377;{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}

      {/* Categories accordions */}

      {categories.map((category, index) =>
      // controlled component now
      (<RestaurantCategory
        key={category?.card?.card.title}
        data={category?.card?.card}

        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        dummy={dummy}
      />

      ))}

    </div>
  );
};

export default RestaurantMenu;