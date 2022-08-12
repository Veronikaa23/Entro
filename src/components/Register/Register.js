import "./Register.css"

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const Register = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const username = formData.get('username');
    const city = formData.get('city');
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if(email==="" || username==="" || city==="" || password===""|| confirmPassword===""){
      return window.alert('All fields are required!')
    }
    
    if (password !== confirmPassword) {
      return window.alert('Password mismatch!');
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
            value={message}
            onChange={handleChange}
          />
          {error && <h2 style={{color: 'red'}}>{error}</h2>}

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
