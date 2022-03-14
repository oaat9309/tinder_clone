import styles from "./ChatContainer.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay";

const ChatContainer = () => {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <div>
        <button className={styles.option}>Matches</button>
        <button className={styles.option}>Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
