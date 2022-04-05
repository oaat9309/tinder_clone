import styles from "./ChatContainer.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);
  return (
    <div className={styles.container}>
      <ChatHeader user={user} />
      <div>
        <button className={styles.option} onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className={styles.option} disabled={!clickedUser}>
          Chat
        </button>
      </div>
      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}
      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
