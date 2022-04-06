import LOGO from "../../images/logo.png";
import "./Nav.module.css";

const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="container">
        <img className="logo" src={LOGO} alt="logo" />
      </div>
      {!authToken && (
        <button onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
