import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { PROXY_URL, JP_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      PROXY_URL + JP_URL
    );
    const json = await data.json();

    // Optional Chaining
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
      (restaurant) => restaurant.info
    );

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }


  return !listOfRestaurant || listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col items-center px-40">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-lg p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-[#E96034] m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filtered);

            }}> Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-[#E96034] m-4 rounded-lg" onClick={() => {
            const topRated = listOfRestaurant.filter((res) => res.avgRating > 4.5);
            setFilteredRestaurant(topRated);
          }}>
            Top Rated Restaurant</button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}>

            {/* if the restaurant is veg then add a veg label to it */
              restaurant.veg ? (<RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Body;