import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/mainpage/home/Home";
import Menu from "../Pages/menuPage/menuprofle/Menuprofile";
import OrderPage from "../Pages/orderpage/OrderPage";
import Login from "../Pages/login&out/Login";
import SinUp from "../Pages/login&out/SinUp";
import Dashbord from "../Layout/DASHBORD/Dashbord";
import Cart from "../Layout/DASHBORD/Cart/Cart";



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
    {
      path:'dashbord',
      element:<Dashbord></Dashbord>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);