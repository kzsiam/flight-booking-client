import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";

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
        }
    ]
   } 
])