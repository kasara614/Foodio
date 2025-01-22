import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { PROXY_URL, BHL_URL, JP_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).
  console.log("Body Rendered");


  //useState() return array - we do "Array Destructuring" on the fly above, nothing else below is the  real Array Destructuring

  // const arr = useState(resList);
  //const [listOfRestaurant, setListOfRestaurant] = arr;
  // const listOfRestaurant = arr[0];      //this is javascript not even react
  // const setListOfRestaurant = arr[1];

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  // console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      PROXY_URL + JP_URL
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info));

    // Optional Chaining
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info));

    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info));
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  console.log(listOfRestaurant);

  return !listOfRestaurant || listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredRestaurant);

            }}> Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-blue-100 m-4 rounded-full" onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.avgRating > 4);
            setListOfRestaurant(filteredList);
          }}>
            Top Rated Restaurant</button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} />

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