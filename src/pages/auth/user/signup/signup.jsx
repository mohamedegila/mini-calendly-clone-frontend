import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import repository from "../../../../api/repository";
import { Logo } from "../../../../components/logo";
import { setUser } from "../../../../redux/auth/authSlice";
import commonAuthStyle from "../commonAuth.module.css";

export const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: [],
    username: [],
    password: [],
  });
  const [isPassword, setIsPassword] = useState(false);

  const [passwordVlidation, setPasswordVlidation] = useState({
    isUppercase: false,
    isLowercase: false,
    isSpcial: false,
    isNumber: false,
  });

  const { email, username, password } = state;

  const { isUppercase, isNumber, isSpcial, isLowercase } = passwordVlidation;
  const [searchParams] = useSearchParams();

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    setState({ ...state, ["email"]: searchParams.get("email") });
  }, [searchParams, passwordVlidation]);

  const handleChange = async (e) => {
    let { name, value } = e.target;

    let uppercasePattern = /[A-Z]+/;
    let lowercasePattern = /[a-z]+/;
    let specialCharPattern = /\W+/;
    let digitsPattern = /[0-9]{4}/;

    setState({ ...state, [name]: value });
    setErrors((prev) => ({
      ...prev,
      [name]: value.length > 0 ? [] : ["*required"],
    }));

    if (name === "password") {
      setIsPassword(true);
      setPasswordVlidation((prevState) => ({
        ...prevState,
        isUppercase: uppercasePattern.test(value),
        isNumber: digitsPattern.test(value),
        isSpcial: specialCharPattern.test(value),
        isLowercase: lowercasePattern.test(value),
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isErrors = false;

    for (const [key, value] of Object.entries(errors)) {
      isErrors = isErrors || value.length > 0;
    }

    if (!isErrors && isUppercase && isNumber && isSpcial && isLowercase) {
      try {
        let res = await repository.signin(state);
        console.log({ res });

        let queryString = "email=" + res?.data?.data?.info?.email;

        navigate(`/auth/login?${queryString}`);

        setState({ email: "", usernam: "", password: "" });
        setIsPassword(false);
      } catch (error) {
        setErrors({ ...error.response.data.errors });
      }
    }
  };

  return (
    <>
      <div className="mb-5">
        <Logo />
      </div>
      <div className="flex justify-center">
        <div className={commonAuthStyle.box}>
          <div className="text-center">
            <h3>Sign Up</h3>
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
              <ul className="pl-2">
                {(() => {
                  const arr = [];
                  errors.email.forEach((mgs) => {
                    arr.push(<li className="text-sm text-danger">{mgs}</li>);
                  });
                  return arr;
                })()}
              </ul>
              <label>User Name</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="user name"
                onChange={handleChange}
                required
              />
              <ul className="pl-2">
                {(() => {
                  const arr = [];
                  errors.username.forEach((mgs) => {
                    arr.push(<li className="text-sm text-danger">{mgs}</li>);
                  });
                  return arr;
                })()}
              </ul>

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {isPassword && (
                <div>
                  <ul className="p-2">
                    <li
                      className={[
                        "text-sm",
                        passwordVlidation.isNumber
                          ? "text-success"
                          : "text-danger",
                      ].join(" ")}
                    >
                      should contain at least 4 numbers
                    </li>
                    <li
                      className={[
                        "text-sm",
                        passwordVlidation.isUppercase
                          ? "text-success"
                          : "text-danger",
                      ].join(" ")}
                    >
                      should contain uppercase
                    </li>
                    <li
                      className={[
                        "text-sm",
                        passwordVlidation.isLowercase
                          ? "text-success"
                          : "text-danger",
                      ].join(" ")}
                    >
                      should contain lowercase
                    </li>
                    <li
                      className={[
                        "text-sm",
                        passwordVlidation.isSpcial
                          ? "text-success"
                          : "text-danger",
                      ].join(" ")}
                    >
                      should contain special chracter
                    </li>
                  </ul>
                </div>
              )}

              <input
                type="submit"
                value="signup"
                bg="#486bff"
                color={"white"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
