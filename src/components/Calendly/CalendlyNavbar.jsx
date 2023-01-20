import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../logo";


const CalendlyNavbar = () => {
  
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

             <Link to="/logout">
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
