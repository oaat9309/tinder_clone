import styles from "./Chat.module.css";

const Chat = ({descendingOrderMessages}) => {
  return <div className={styles.display}>
    {descendingOrderMessages.map(message, _index) => {
      <div key={_index}>
        <div className={styles.chat-message-header}>
          <div className={styles.img-container}>
            <img src={message.img} alt={message.first_name}/>
          </div>
          <p>{message.name}</p>
        </div>
        <p>{message.message}</p>
      </div>
    }}
  </div>;
};

export default Chat;
