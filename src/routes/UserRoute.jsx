import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  // const location = useLocation();
  const {user} = useSelector((state) => state.auth);

  console.log({user});
  const navigate = useNavigate()
  useEffect(() => {
    if(user === null){
      navigate("/login")
    }
  }, [navigate,user])
  

  
  return children
};

export default UserRoute;

