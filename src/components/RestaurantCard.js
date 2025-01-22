import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg"> {resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>Rated {resData.avgRating ?? "Rating not available"} out of 5</h4>
      <h4>Delivery in {resData.sla.deliveryTime} minutes</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>

    </div >
  );
};

// Higher Order Component

// input - RestaurantCard ==> return RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;