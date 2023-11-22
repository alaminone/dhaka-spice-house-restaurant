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
import AllUsers from "../Layout/DASHBORD/allusers/AllUsers";
import AddItems from "../Layout/DASHBORD/additems/AddItems";
import Manageitem from "../Layout/DASHBORD/manageitem/Manageitem";
import Adminroute from "./Adminroute";
import Updateitem from "../Layout/DASHBORD/manageitem/Updateitem";



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
        // user
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // addmin
        {
          path:'allusers',
          element:<Adminroute><AllUsers></AllUsers></Adminroute>
        },
        {
          path:'additems',
          element:<Adminroute><AddItems></AddItems></Adminroute>
        },
        {
          path:'manageitems',
          element:<Adminroute><Manageitem></Manageitem></Adminroute>
        },
        {
          path:"updateitem/:id",
          element:<Adminroute><Updateitem></Updateitem></Adminroute>,
          loader:({params})=> fetch(`http://localhost:5001/menu/${params.id}`)
        }
        
        
      
        
      ]
    }
  ]);