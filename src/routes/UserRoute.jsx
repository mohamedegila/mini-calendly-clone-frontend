import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  // const location = useLocation();
  // const {user} = useSelector((state) => state.auth);
  const user = sessionStorage.user
    ? JSON.parse(sessionStorage.getItem("user"))
    : null;

  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
};

export default UserRoute;
