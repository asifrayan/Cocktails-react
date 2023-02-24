import Logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <NavLink to="/">
            <img src={Logo} alt="Cocktails logo" className="logo" />
          </NavLink>

          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? '#476a2e' : '#222' };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return { color: isActive ? '#476a2e' : '#222' };
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
