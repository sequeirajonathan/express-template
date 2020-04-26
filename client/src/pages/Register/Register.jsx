import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.scss";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    regToken: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { regToken, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert("Passwords do not match", 'danger');
    } else if (regToken !== "coldFire1992") {
      setAlert("Token is invalid", 'danger');
    } else {
      let registerData = {
        regToken,
        email,
        password,
      };
      register(registerData);
    }
  };
  return (
    <div className="register-form">
      <form onSubmit={(e) => onSubmit(e)} autoComplete="true">
        <div className="avatar">
          
        </div>
        <h2 className="text-center">Register</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="regToken"
            value={regToken}
            onChange={(e) => onChange(e)}
            placeholder="Registration Token"
            
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            className="form-control"
            placeholder="Email"
            autoComplete="username"
            
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            className="form-control"
            placeholder="Password"
            autoComplete="new-password"
            
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => onChange(e)}
            placeholder="Confirm Password"
            autoComplete="new-password"
            
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign up
          </button>
        </div>
        <div className="clearfix">
          <Link to="/" className="pull-right">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};


export default connect(null, { setAlert, register })(Register);
