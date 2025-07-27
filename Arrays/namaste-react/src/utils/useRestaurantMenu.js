import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch restaurant menu data
    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        const res = await fetch(MENU_API + resId)
        const data = await res.json();
        setResInfo(data);
    }

    return resInfo;
}

export default useRestaurantMenu;