import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=");
        const json = await res.json();
        console.log(json);
        setResInfo(json.data);
    }
    if (resInfo === null) return <Shimmer />;
    return (
        <div>
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu