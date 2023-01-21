import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
// import { Link } from "react-router-dom";
import { Actions } from "./components/actions";
import { Navbar } from "../../components/Navbar";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
 

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const [data] = useState({
    type: 'login',
    first_message: "Welcome back",
    second_message: "to Calendly",
    info_message: "Log in to your account to get back to your hub for scheduling meetings.",
    actions:{
      url: '/auth/login',
      btnName: 'login'
    }
  }); 
  return (
    <>
     <Navbar isNavLink={false}/> 
      <div className="">
        <div className="flex text-start">

          <Actions data={data} />
          <div className={[styles.infoSection, styles.alignSections].join(" ")}>
            <div className={styles.box}>
              <button className="text-blue-600 font-thin">WHAT'S NEW?</button>

              <h3 className={["text-info-color", styles.fontInfoStyles].join(" ")}>
                Webinar: Close More Deals with Calendly
              </h3>

              <p className={styles.text}>
                Tune in to our expert panel on{" "}
                <span className={styles.signup_lable}>{} at 10am PDT</span> to
                find out how sales teams use Calendly to turn meeting scheduling
                into a competitive advantage.
              </p>
              <p className={styles.save_seat}>Save your seat {`>`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
