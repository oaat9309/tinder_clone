import styles from "./ChatHeader.module.css";
import { CgLogOut } from "react-icons/cg";

const ChatHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.image_container}>
          <img src="" />
        </div>
        <h3>UserName</h3>
      </div>
      <CgLogOut className={styles.icon} />
    </div>
  );
};

export default ChatHeader;
