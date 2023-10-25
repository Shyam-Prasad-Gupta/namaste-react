//import {CDN_URL} from "../utils/constants";
import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
    //const {resName, avgRating, deliveryTime, resAddress, cuisines} = props;
    //const {} = props.restList;
    const {name, cuisines, avgRatingString, sla, areaName, cloudinaryImageId, cta} = props?.rest.info;
    
    return (
      // <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      //   <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b033728dcb0101ceb19bff0e1e1f6474"/>
      //   <h4>{resName}</h4>
      //   <h4>{cuisines}</h4>
      //   <h4>{avgRating} Stars</h4>
      //   <h4>{deliveryTime} Mins</h4>
      //   <h5>{resAddress}</h5>
      // </div>
  
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <a href={props?.rest.cta.link} style = {{textDecoration: "none"}}>
        <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} Stars</h4>
        <h4>{sla.deliveryTime} Mins</h4>
        <h5>{areaName}</h5>
        </a>
      </div>
    );
  };

  export default RestaurantCard;