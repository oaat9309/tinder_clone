import styles from "./ChatDisplay.module.css";
import Chat from "../Chat/Chat";
import ChatInput from "../ChatInput/ChatInput";

const ChatDisplay = () => {
  return (
    <>
      <Chat />
      <ChatInput />
    </>
  );
};

export default ChatDisplay;
