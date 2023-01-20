import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  // const location = useLocation();
  const {isAuth} = useSelector((state) => state.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if(!isAuth){
      navigate("/calendly")
    }
  }, [navigate,isAuth])
  

  
  return children
};

export default UserRoute;

