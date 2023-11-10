import { lazy } from "react"
import { Navigate } from "react-router-dom"

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import("../pages/Register"));

export const PublicRoutes = () => {
    return [

        {path: '/login', element: <LoginPage/>},
        {path:'/register', element: <RegisterPage/>},
        {path: '*', element: <Navigate to='/login' replace/>},
        
    ];
}

