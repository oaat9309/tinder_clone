import LOGO from "../../images/logo.png";
import "./Nav.module.css";

const Nav = ({ authToken }) => {
  return (
    <nav>
      <div className="container">
        <img className="logo" src={LOGO} alt="logo" />
      </div>
      {!authToken && <button>Log in</button>}
    </nav>
  );
};

export default Nav;
