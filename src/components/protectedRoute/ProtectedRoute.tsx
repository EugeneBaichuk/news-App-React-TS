import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const ls = localStorage.getItem("auth");
    const isAuth = JSON.parse(ls)?.isAuth || undefined;
    return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;