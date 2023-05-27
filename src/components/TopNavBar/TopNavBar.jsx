import logo from '../../assets/SkyFlowLogo.png';

export const TopNavBar = () => {
  return (
    <nav className="top-nav-bar">
      <img src={logo} className="app-logo" alt="logo" />
      <section className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </section>
    </nav>
  );
};