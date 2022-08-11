import "./Header.css"
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuthContext();

  return (
    <header>
      <Link className="logo" to="/">
        <img src="images/logo.png" alt="logo" />
      </Link>
      <nav>
        <div id="all">
          <Link to="/catalog">All events</Link>
        </div>

        {user.email ? (
          <div id="user">
            <Link to="/create">Create Event</Link>
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
