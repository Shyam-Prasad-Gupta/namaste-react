import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {

    const [restaurantData, setRestaurantData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.624709842508725&lng=77.03377816826107&restaurantId=141986&catalog_qa=undefined&submitAction=ENTER");
        
        //console.log(apiData);
        const jsonData = await apiData.json();
        console.log(jsonData);
        console.log(jsonData.data)
        setRestaurantData(jsonData);
        return jsonData;
    };

    if(restaurantData === null)
        return <Shimmer />

    return (
        <div>
            <h1>{restaurantData.data.cards[0].card.card.info.name}</h1>
            <h3>Menu Items:</h3>
            <ul>
                <li>{restaurantData.data.cards[0].card.card.info.cusines.join(",")}</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
                <li>Menu Item 5</li>
            </ul>
        </div>
    );
};

export default RestaurantDetail;