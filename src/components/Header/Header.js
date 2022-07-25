const Header = () => {
  return (
    <header>
      {/* <h1>
        <a class="home" href="/">
          Events
        </a>
      </h1> */}
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <nav>
        <a href="/catalog">All events</a>

        {/* <div id="user"> */}
        <a href="/create">Create Event</a>
        <a href="/logout">Logout</a>
        {/* </div> */}

        {/* <div id="guest"> */}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;
