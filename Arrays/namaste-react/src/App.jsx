import {createBrowserRouter} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
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
        path: "/about",
        element: <About />
      },
    ]
  },
])

export default AppRouter
