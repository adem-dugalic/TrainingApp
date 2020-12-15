import React from "react";
import Logo from "../img/IUSlogo2.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import axios from "axios";

import "../css/custom.css";
import "../css/main.css";
import "../css/util.css";

interface RegisterProps {
  userID?: string;
  password?: string;
  ConfirmPassword?: string;
}

export const Register: React.FC<RegisterProps> = ({}) => {
  const { register, handleSubmit } = useForm<RegisterProps>();

  const onSubmit = (data: RegisterProps) => {
    console.log(data);

    if (data.ConfirmPassword !== data.password) {
      alert("Error");
      window.location.href = "/register";
      return;
    }

    const newUser = {
      userID: data.userID,
      password: data.password,
    };

    axios
      .post("http://localhost:5000/users/signup", newUser)
      .then(() => {
        console.log("Success");
        window.location.href = "/";
      })
      .catch((err) => alert("Error: " + err));

    //window.location = "/"; don't refresh the page before the request is finish....
  };

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

            <span className="login100-form-title p-b-34 p-t-27">Register</span>

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

            <div
              className="wrap-input100 validate-input"
              data-validate="Confirm password"
            >
              <input
                className="input100"
                type="password"
                name="confirmPassword"
                ref={register}
                placeholder="Confirm password"
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
              <button className="login100-form-btn">Signup</button>
            </div>

            <div className="text-center p-t-90">
              <Link className="txt1" to="/">
                Have an account!? Log in now!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
