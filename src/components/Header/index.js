import Home from "../Home";
import Section from "../Section";
import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <a className="navbar-brand" href="#">
            <div className="logo"></div>
          </a>
          <h1 className="logo-heading">PSYCHIATRY</h1>
        </div>
        <div className="navbar-nav">
          <a className="nav-link" href="#">
            Who we are
          </a>
          <a className="nav-link" href="#">
            What we treat
          </a>
          <a className="nav-link" href="#">
            Services
          </a>
          <a className="nav-link" href="#">
            Resources
          </a>
        </div>

        <div className="button-container">
          <button className="button" type="button">
            Book an Appointment
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
