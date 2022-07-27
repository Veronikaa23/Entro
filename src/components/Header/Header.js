import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>  
      <Link className="logo" to="/">
        <img src="images/logo.png" alt="logo"/>
      </Link>
      <nav>
        <Link to="/catalog">All events</Link>

        {/* <div id="user"> */}
        <Link to="/create">Create Event</Link>
        <Link to="/logout">Logout</Link>
        {/* </div> */}

        {/* <div id="guest"> */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;
