const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisine, avgRating, costForTwo, deliveryTime } = resData.data
    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisine.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;