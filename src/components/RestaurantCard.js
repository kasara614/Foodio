import SvgStar from "../Assests/SvgStar";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div data-testid="resCard"
      className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-40 w-60 object-cover "
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg truncate"> {resData.name}</h3>
      <div className="flex items-center space-x-2 font-bold">
        {resData.avgRating ? (
          <>
            <SvgStar />
            <h4>{resData.avgRating}  • </h4>
            <h4>{resData.sla.slaString}</h4>
          </>
        ) : (
          <h4>{resData.sla.slaString}</h4>
        )}
      </div>
      <h4 className="truncate text-gray-700">{resData.cuisines.join(", ")}</h4>
      <h4 className="truncate text-gray-700">{resData.areaName}</h4>
    </div >
  );
};

// Higher Order Component
// input - RestaurantCard ==> return RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-[#e96034] text-gray m-2 p-1 rounded-lg">Promoted Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;