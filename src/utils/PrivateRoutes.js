import { Navigate} from "react-router-dom";
import {lazy } from "react";
import { AppBar } from "components/appBar";


const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import('../pages/Contacts'));

export const PrivateRoutes = () => {

  return {

    element:<AppBar/>,
    children: [
        {path: '/', element:<Home/>},
        {path: '/contacts', element:<Contacts/>},
        {path: '*', element: <Navigate to="/" replace/>}
    ]
  }
}