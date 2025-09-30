import { useEffect } from "react"; 
import "../styles/MessagePanel.scss";

const MessagePanel = ({ message, closeMessagePanel }) => {
  useEffect(() => {
    if (!message) {
      return;
    }
    const timer = setTimeout(() => {
      closeMessagePanel();
    }, 1000);

    return () => clearTimeout(timer);
  }, [message, closeMessagePanel]);

  if (!message) {
    return null;
  }

  return (
    <div className="messagePanel">
      {message}
    </div>
  );
};

export default MessagePanel;

