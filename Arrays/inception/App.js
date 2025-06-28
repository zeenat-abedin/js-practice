import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
