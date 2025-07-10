import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const res = await fetch("/api?id=221738");


        const json = await res.json();
        console.log(json);
        setResInfo(json.data);
    }
    if (resInfo === null) return <Shimmer />;
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Paneer Tikka</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu