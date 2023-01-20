import React, { useState } from "react";
import styles from "../login.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Actions = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const clickHandler = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(emailRegex)) {
      setError("");
      let queryString = "email=" + email;
    
      navigate(`${props.data.actions.url}?${queryString}`);
    } else {
      setError("Please enter a valid email address.");
    }
    console.log("clickHandler", props.data.actions.url, email);
  };

  const changeEmailHandler = (e) => {
    console.log("changeEmailHandler", e.target.value);
    setEmail(e.target.value);
  };
  return (
    <>
      <div className={[styles.alignSections, styles.actionSection].join(" ")}>
        <div>
          <h1 className={styles.fontStyles}>
            <span className="text-info-color">{props.data.first_message}</span>
            <span className="text-blue-600/100">
              {" "}
              {props.data.second_message}
            </span>
          </h1>
        </div>

        <p className={styles.text}>{props.data.info_message}</p>
        <p className={styles.email_lable}>Email Address</p>

        <div className="mb-2">
          <input className={styles.email_input} onInput={changeEmailHandler} />
          <button className={styles.action_btn} onClick={clickHandler}>
            {props.data.actions.btnName}
          </button>
        </div>

        <span  className="pl-4 my-1 text-danger text-xs">{error}</span>
        <div className="mt-1">
          {props.data.type === "login" ? (
            <p className={styles.signup_lable}>
              Don’t have an account?{" "}
              <Link to="/signup" style={{ color: "#486bff", lineHeight: "25px" }}>
                
                  SignUp
                
              </Link>
            </p>
          ) : (
            props.data.actions.message
          )}
        </div>
      </div>
    </>
  );
};
