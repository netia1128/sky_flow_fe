import { Link } from 'react-router-dom';
import logo from '../assets/SkyFlowLogo.png';

export const TopNavBar = () => {
  return (
    <nav className="top-nav-bar">
      <img src={logo} className="app-logo" alt="logo" />
      <section className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </section>
    </nav>
  );
};