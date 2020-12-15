import React from "react";
import Logo from "../img/IUSlogo2.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import axios from "axios";
import Cookie from "js-cookie";

import "../css/custom.css";
import "../css/main.css";
import "../css/util.css";

interface LoginProps {
  userID?: string;
  password?: string;
  isAdmin?: boolean;
}

export const Login: React.FC<LoginProps> = ({}) => {
  const { register, handleSubmit } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    const user = {
      userID: data.userID,
      password: data.password,
    };

    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => {
        console.log(res.data);
        Cookie.set("token", res.data.token);
        Cookie.set("userId", res.data.userId);
        Cookie.set("name", res.data.name);
        Cookie.set("surname", res.data.surname);

        data.isAdmin = res.data.isAdmin;

        if (data.isAdmin) {
          //needs testing
          window.location.href = "/AdminHome";
        } else {
          //Return to the user list
          window.location.href = "/Home";
        }
      })
      .catch((err) => {
        Cookie.remove("token");
        Cookie.remove("userId");

        alert("Error: " + err);
      });
  };

  //  isLogin() {
  //    if (!Cookie.get("token")) return false;
  //    else return Cookie.get("token") !== "" && Cookie.get("userId") !== "";
  //  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="login100-form validate-form"
          >
            <span className="login100-form-logo">
              <img className="img" src={Logo} />
            </span>

            <span className="login100-form-title p-b-34 p-t-27">Log in</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter ID"
            >
              <input
                className="input100"
                type="text"
                name="userID"
                ref={register}
                placeholder="ID"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                type="password"
                name="password"
                ref={register}
                placeholder="Password"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>

            <div className="contact100-form-checkbox">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label
                className="label-checkbox100" //for="ckb1"
              >
                Remember me
              </label>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>

            <div className="text-center p-t-90">
              <Link className="txt1" to="/register">
                Don't have an account!? Register!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div id="dropDownSelect1"></div>
    </div>
  );
};
