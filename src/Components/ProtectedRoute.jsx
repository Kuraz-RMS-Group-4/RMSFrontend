import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
   // const {isAuthenticated} = useSelector((state) => state.user);
   // if(!isAuthenticated){
   //  return <Navigate to = "/AuthPage"/>;
   // }
   return children;
}
export default ProtectedRoute;