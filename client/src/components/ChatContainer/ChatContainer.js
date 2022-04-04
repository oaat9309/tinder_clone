import styles from "./ChatContainer.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay";

const ChatContainer = ({ user }) => {
  return (
    <div className={styles.container}>
      <ChatHeader user={user} />
      <div>
        <button className={styles.option}>Matches</button>
        <button className={styles.option}>Chat</button>
      </div>
      <MatchesDisplay matches={user.matches} />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
