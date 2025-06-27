import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
          alt="logo-img"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const resList = [
  {
    type: "restaurant",
    data: {
      id: "178387",
      name: "Hyderabadi Handi Biryani",
      city: "1",
      slugs: {
        restaurant: "hyderabadi-handi-biryani-marathahalli-marathahalli",
      },
      cloudinaryImageId: "ewzw2m8whkincsto9kqm",
      locality: "CKB Layout",
      areaName: "Marathahalli",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Desserts",
        "Tandoor",
        "Hyderabadi",
        "Andhra",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "178387",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "23K+",
      promoted: true,
      availability: {
        nextCloseTime: "2025-06-28 04:45:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: "178387",
      name: "KFC Burgers",
      city: "1",
      slugs: {
        restaurant: "hyderabadi-handi-biryani-marathahalli-marathahalli",
      },
      cloudinaryImageId: "ewzw2m8whkincsto9kqm",
      locality: "CKB Layout",
      areaName: "Marathahalli",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Desserts",
        "Tandoor",
        "Hyderabadi",
        "Andhra",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "178387",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "23K+",
      promoted: true,
      availability: {
        nextCloseTime: "2025-06-28 04:45:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout);
