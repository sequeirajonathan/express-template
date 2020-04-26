import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import "./login.scss";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email,password);
  };
  return (
    <div className="login-form">
      <form autoComplete="true" onSubmit={(e) => onSubmit(e)}>
      <div className="avatar">

        </div>
        <h2 className="text-center">Member Login</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="email"
            autoComplete="username"
            placeholder="Email"
            onChange={e => onChange(e)}
            
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={e => onChange(e)}
            autoComplete="new-password"
            
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>
        </div>
        <div className="clearfix">
          <Link to="/" className="float-left">
            Forgot Password?
          </Link>
          <Link to="/register" className="float-right">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
