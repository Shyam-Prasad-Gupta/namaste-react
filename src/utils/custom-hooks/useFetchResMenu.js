import { useEffect, useState } from "react";
import { RES_DETAIL_URL } from "../constants";

const useFetchResMenu = (resId) => {

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchData(RES_DETAIL_URL.replace("$resId", resId));
    }, []);

    const fetchData = async (resURL) => {

        const resMenuResponse = await fetch(resURL, {
            "method": "GET"
        });
        const resMenuData = await resMenuResponse.json();
        
        setRestaurantData(resMenuData);
    }
    return restaurantData;
};

export default useFetchResMenu;