import "./Register.css"

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const Register = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
   
    // const username = formData.get("username");
    // const address = formData.get("address");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    // const gender = formData.get("gender");

    if (password !== confirmPassword) {
      return;
    }

    authService.register(email, password).then((authData) => {
      userLogin(authData);
      navigate("/");
    });
  };

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="user-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
          />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="maria123"
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Sofia"
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="******"
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="******"
          />
          <label htmlFor="gender">Gender:</label>
          <select id="gender" type="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input className="btn submit" type="submit" value="Register" />
          <p className="field">
            <span>
              If you already have acount click <a href="/login">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
