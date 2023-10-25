import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";


//let restList = restaurantList;
const Body = () => {
    const [resList, setResList] = useState(restaurantList);
    //setResList(restaurantList);

    return (
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="filter-btn">
        <button onClick={() => {
            console.log("Button Clicked");
            const filteredResList = resList.filter(res => res.info.avgRating > 4);
            setResList(filteredResList);
            console.log(resList);
            }} onMouseOver={() => console.log("Cursor mere upar hai..!")}>Filter Top Rated Restaurants</button>
      </div>
      <div className="res-card-container">
        {/* <ResCardComponent resName="theobrama" avgRating="4.3" deliveryTime="45" resAddress="DLF Cyber City" cuisines="Biryani, Firmi, Fast Food"/> */}
        { resList.map((restaurant, index) => <RestaurantCard key={restaurant.info.id} rest={restaurant}/>) }
      </div>
    </div>
    );
  };

  export default Body;