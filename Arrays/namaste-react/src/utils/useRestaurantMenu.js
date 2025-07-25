import { useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    //fetch restaurant menu data
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(MENU_API)
        const data = await res.json();
        return data;
    }

    return resInfo;
}

export default useRestaurantMenu;