import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

<<<<<<< HEAD
/**
 * Code Splitting
 * Chunking
 * Dynamic Bundling
 * Lazy loading
 * on demand loading
 */

=======
>>>>>>> Foodio/git-pages
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an API call and send username and password
    const data = {
      name: "Sumit Kasara",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/* //Default user name */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Sumit Kasara */}
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Dada" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          {/* if path = / 
      <Body />

      {/* if path = /about  }
      <About />

      {/* if path = /contact  }
      <Contact /> */}

          <Outlet />

        </div>
      </UserContext.Provider>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//before react router we use direct component
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);