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
    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" alt="res-logo" />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisine.join(',')}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>{resData.data.costForTwo / 100}</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    )
}

const resObj = {
    type: "restaurant",
    data: {
        name: "KFC",
        cuisine: "Chicken Burger",
        avgRating: 4.3,
        costForTwo: 400,
        deliveryTime: 30,
    }
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}/>
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
