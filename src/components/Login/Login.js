import "./Login.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.target));

    if (email === "" || password === "") {
      return window.alert("All fields are required");
    }

    authService
      .login(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch(
        (err) => err
        // navigate("/")
      );
  };

  return (
    <main>
      <section id="login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>
          <div className="container">
            <div className="user-logo"></div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="pesho123@abv.bg"
              name="email"
              value={message}
              onChange={handleChange}
            />
            {error && <h2 style={{ color: "red" }}>{error}</h2>}

            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              placeholder="*******"
              name="password"
            />

            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>
                If you don't have acount click <a href="/register">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
