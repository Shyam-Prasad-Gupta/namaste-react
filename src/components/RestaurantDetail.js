import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/custom-hooks/useFetchResMenu";


const RestaurantDetail = () => {

    const {resId} = useParams();
    
    const restaurantData = useFetchResMenu(resId);

    // const fetchData = async () => {
    //     console.log(RES_DETAIL_URL.replace("$resId", resId));
    //     const apiData = await fetch(RES_DETAIL_URL.replace("$resId", resId));
        
    //     //console.log(apiData);
    //     const jsonData = await apiData.json();
    //     // console.log(jsonData);
    //     // console.log(jsonData.data)
    //     // console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.forEach(card => {
    //     //     console.log(card.card.card["@type"]);
    //     // }));
    //     setRestaurantData(jsonData);
    //     return jsonData;
    // };

    if(restaurantData === null)
        return <Shimmer />

    return (
        <div>
            <h1>{restaurantData.data.cards[0].card.card.info.name}</h1>
            <h2>{restaurantData.data.cards[0].card.card.info.cuisines.join(', ')} - {restaurantData.data.cards[0].card.card.info.costForTwoMessage}</h2>
            <h3>Menu Items:</h3>
            <ul>
                {restaurantData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(card => {
                    console.log(card.card.card["@type"]);
                    if(card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                        return card.card.card.itemCards.map(dish => {
                            if(dish.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Dish"){
                                console.log(dish.card.info.id);
                                console.log(dish.card.info.ratings.aggregatedRating.rating);
                                console.log(dish.card.info.price);
                                return (<li id={dish.card.info.id}>
                                    {dish.card.info.name}, {dish.card.info.ratings.aggregatedRating.rating} stars, Price: {dish.card.info.price/100}
                                </li>);    
                            }
                        });
                    } else if(card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                        return (
                            <div>
                                {console.log(card.card.card.title)}
                            <h4>{card.card.card.title}</h4>
                            <ul>
                                {card.card.card.categories.map(
                                    category => {
                                        console.log(category.itemCards["@type"]);
                                        console.log(category.title);
                                        console.log(category.itemCards[0])
                                        return category.itemCards.map(dish => {
                                            if(dish["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Dish"){
                                                return card.card.card.itemCards.map(dish => {
                                                    if(dish.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Dish"){
                                                        console.log(dish.card.info.id);
                                                        console.log(dish.card.info.ratings.aggregatedRating.rating);
                                                        console.log(dish.card.info.price);
                                                        return (<li id={dish.card.info.id}>
                                                            {dish.card.info.name}, {dish.card.info.ratings.aggregatedRating.rating} stars, Price: {dish.card.info.price != undefined ? dish.card.info.price/100 : dish.card.info.defaultPrice/100}
                                                        </li>);    
                                                    }
                                                });
                                            }
                                        });
                                    }
                                )}
                            </ul>
                            </div>
                        );
                    }
                })}
            </ul>
        </div>
    );
};


export default RestaurantDetail;