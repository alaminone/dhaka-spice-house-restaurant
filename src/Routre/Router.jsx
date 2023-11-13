import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/mainpage/home/Home";
import Menu from "../Pages/menuPage/menuprofle/Menuprofile";
import OrderPage from "../Pages/orderpage/OrderPage";
import Login from "../Pages/login&out/Login";
import SinUp from "../Pages/login&out/SinUp";



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
          path:"order/:category",
          element:<OrderPage></OrderPage>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/sinup',
          element:<SinUp></SinUp>
        }
      ]
    },
  ]);