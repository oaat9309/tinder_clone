import styles from "./AuthModal.module.css";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords are not matching.");
      }
      console.log("make a post request to out DB");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(email, password, confirmPassword);

  return (
    <div className={styles.modal}>
      <div onClick={handleClick} className={styles.icon}>
        <CgCloseO />
      </div>
      <h2>{isSignUp ? "Create Account" : "Log In"}</h2>
      <p>
        By Clicking Log In, you agree to our terms. <br /> Learn how we process
        your data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
