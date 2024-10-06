import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";



export const router = createBrowserRouter([
    {
        element:<AuthLayout />,
        children:[
            {path:'login', element:<Login />},
            {path:'signup', element:<SingUp />}
        ]
    }
])