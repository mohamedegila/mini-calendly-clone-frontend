import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import repository from "../../api/repository";
import { logout } from "../../redux/auth/authSlice";
import { Logo } from "../logo";


const CalendlyNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try{
      await repository.logout();
      await dispatch(logout());
      navigate('/')
    }catch(error){
      console.log(error);
    }

  }
  
  return (
    <>
      <div>
        <div className="flex justify-between mt-3 mx-auto py-4 border-b-4" >
          <div className="flex">
            <Logo/>
          </div>

          <div>
            <div  className="flex justify-between gap-10">
              <Link to="/calendly" textDecoration={"none"}>
                  Home
              </Link>

              <Link to={"#"} textDecoration={"none"}>
                <button
                  variant={"link"}
                  fontSize={"16px"}
                  textDecoration={"none"}
                >
                  Availability
                </button>
              </Link>

              <Link to={"#"} textDecoration={"none"}>
                <button
                  variant={"link"}
                  fontSize={"16px"}
                  textDecoration={"none"}
                >
                  Integration
                </button>
              </Link>

             <Link to="#"
             onClick={logoutHandler}
             >
                logout
             </Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendlyNavbar;
