import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/mainpage/home/Home";
import Menu from "../Pages/menuPage/menuprofle/Menuprofile";
import OrderPage from "../Pages/orderpage/OrderPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
          element:<OrderPage></OrderPage>
        }
      ]
    },
  ]);