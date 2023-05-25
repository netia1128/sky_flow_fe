import logo from '../../assets/SkyFlowLogo.png';

export const TopNavBar = () => {
  return (
    <nav className="topNavBar">
      <img src={logo} className="appLogo" alt="logo" />
      <section className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </section>
    </nav>
  );
};