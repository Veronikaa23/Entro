const Login = () => {
  return (
    <main>
      <section id="login-page" className="auth">
        <form id="login">
          <div className="container">
            <div className="user-logo" > 
          {/* <img src="images/login.png" alt="image"/>   */}
            </div>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="pesho123"
              name="username"
            />
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" placeholder="*******" name="password" />
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
