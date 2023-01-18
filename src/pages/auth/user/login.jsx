import React, { useEffect, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { Logo } from "../../../components/logo";



import userstyle from './userLogin.module.css'

 export const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setState({ ...state, ['email']: searchParams.get('email') })
  }, [searchParams]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setState({ email: "", password: "" });
  };

  return (

    <>
    <div className="mb-5">
      <Logo/>
    </div>
    <div className="flex justify-center">
    <div className={userstyle.box}>
     
      
      <div className="text-center">
        <h3>Welcome back</h3>
      </div>
      
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
         
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        
          <input type="submit" value="Log In" bg="#486bff" color={"white"} />
          <div>
            <div className={userstyle.signup_lable}>
              Don’t have an account?{" "}
              <Link to={"/signup"}>
                <span style={{ color: "#486bff", lineHeight: "25px" }}>
                  {" "}
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>

    </>
  );
};
