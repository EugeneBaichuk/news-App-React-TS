import { Navigate } from "react-router-dom";
import {FC} from "react";
import {protectedRouteProps} from "../types"

const ProtectedRoute: FC<protectedRouteProps>  = ({ children }) => {
    const ls = localStorage.getItem("auth");
    let isAuth = null;
    ls && (isAuth = JSON.parse(ls)?.isAuth || undefined);
    return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;