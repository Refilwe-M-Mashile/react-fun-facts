import "./nav.scss";

const Nav = () => {
  return (
    <nav>
      <section className="logo-section">
        <a href="https://reactjs.org" target="_blank">
          <img
            src="src/assets/react.svg"
            className="logo react"
            alt="React logo"
            width="40px"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <span className="logo-text">ReactFacts</span>
        </a>
      </section>
    </nav>
  );
};

export default Nav;
