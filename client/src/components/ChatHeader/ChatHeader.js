import styles from "./ChatHeader.module.css";
import { CgLogOut } from "react-icons/cg";
import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("Authtoken", cookies.AuthToken);
    window.location.reload();
  };
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.image_container}>
          <img src={user.url} alt={"photo of" + user.first_name} />
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <CgLogOut className={styles.icon} onClick={logout} />
    </div>
  );
};

export default ChatHeader;
