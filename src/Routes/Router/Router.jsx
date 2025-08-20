import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
   {
    path: '/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/signin',
            element:<Signin></Signin>
        },
        {
            path: '/signup',
            element:<Signup></Signup>
        },
        
    ]
   },
   {
    path: '/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
        {
            
        }
        
    ]
   } 
])