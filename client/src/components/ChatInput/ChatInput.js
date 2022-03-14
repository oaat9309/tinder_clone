import styles from "./ChatInput.module.css";
import { useState } from "react";

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);
  return (
    <div className={styles.input}>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />
      <button className={styles.btn}>Submit</button>
    </div>
  );
};

export default ChatInput;
