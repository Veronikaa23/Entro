const Register = () => {
    return(
<section id="register-page" className="content auth">
  <form id="register">
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
        <input type="text" name="username" id="username"placeholder="maria123"/>
      <label htmlFor="pass">Password:</label>
      <input type="password" name="password" id="register-password"placeholder="******" />
      <label htmlFor="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password" placeholder="******"/>
      <input className="btn submit" type="submit" defaultValue="Register" />
      <p className="field">
        <span>
          If you already have acount click <a href="/login">here</a>
        </span>
      </p>
    </div>
  </form>
</section>

    );
}

export default Register;