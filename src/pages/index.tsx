import Nav from "../components/nav";
import "./index.scss";

const Index = () => {
  return (
    <>
      <Nav />
      <h1>Fun facts about React</h1>
      <section className="box">
        <ul className="facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src="src/assets/reactjs-icon.png" alt="react icon" />
      </section>
    </>
  );
};

export default Index;
