import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Grocery />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ]
  },
])

export default AppRouter
