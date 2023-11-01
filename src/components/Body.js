import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

//let restList = restaurantList;
const Body = () => {
  const [resList, setResList] = useState([]);
  //setResList(restaurantList);

  useEffect(() => {
    console.log("Use Effect called.");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4964301&lng=77.096291&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("Data: ", data);

    const jsonData = await data.json();
    console.log("Json Data: ", jsonData);

    const topRestaurants = jsonData?.data?.cards?.filter(
      (card) => card.card.card.id == "top_brands_for_you"
    );
    if (topRestaurants !== undefined) {
      setResList(
        topRestaurants[0].card.card.gridElements.infoWithStyle.restaurants
      );
      return;
    }
    setResList([]);
    return;
  };

  if (resList.length == 0) {
    //return <h3>Loading.....</h3>
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container" style={{display: "flex", margin: "5px"}}>
        <input className="search-input" placeholder="Search here..."></input>
        <div className="search-btn">
          <btn onClick={ () => {
            //get the search text
            const searchText = document.getElementsByClassName("search-input")[0].value;
            if(searchText == undefined || searchText == null || searchText.length == 0 || resList.length == 0)
              fetchData();
            //filter the restaurant where search text contains in restaurant name
            const filteredRes = resList.filter( res => {
              //filtering logic here
              const resName = res.info.name;
              return resName.match(searchText) != null;
            });
            setResList(filteredRes);
          }}>Search</btn>
        </div>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            console.log("Button Clicked");
            const filteredResList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setResList(filteredResList);
            console.log(resList);
          }}
          onMouseOver={() => console.log("Cursor mere upar hai..!")}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {/* <ResCardComponent resName="theobrama" avgRating="4.3" deliveryTime="45" resAddress="DLF Cyber City" cuisines="Biryani, Firmi, Fast Food"/> */}
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} rest={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
