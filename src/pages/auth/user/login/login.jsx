import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import repository from "../../../../api/repository";
import { Logo } from "../../../../components/logo";
import { refresh } from "../../../../redux/common/commonSlice";

import commonAuthStyle from "../commonAuth.module.css";

export const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const [searchParams] = useSearchParams();


  const {isAuth} = useSelector((state) => state.auth);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    setState({ ...state, ["email"]: searchParams.get("email") });
  }, [searchParams]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    await repository.createSession();
    setState({ email: "", password: "" });
  };


  return (
    <>
      <div className="mb-5">
        <Logo />
      </div>
      <div className="flex justify-center">
        <div className={commonAuthStyle.box}>
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

              <input
                type="submit"
                value="Log In"
                bg="#486bff"
                color={"white"}
              />
              <div>
                <div className={commonAuthStyle.signup_lable}>
                  Don’t have an account?{" "}
                  <Link to="/signup" style={{ color: "#486bff", lineHeight: "25px" }}>
                      SignUp
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
