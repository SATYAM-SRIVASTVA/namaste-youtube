import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Watch from "./components/Watch";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path: "watch",
        element: <Watch />,
      },
      
    ],
  },
]);

export default App;

/**
 *
 *    Head
 *    Body
 *    Sidebar
 *       -MenuItems
 *    MainContainer
 *       -ButtonList
 *       -VideoContainer
 *           -VideoCard
 *
 */
