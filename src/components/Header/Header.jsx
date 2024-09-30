import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full z-50">
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-5">
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
