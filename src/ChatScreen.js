import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Irina Shayk",
      image:
        "https://pyxis.nymag.com/v1/imgs/54d/47e/abf97d3b9f09a58953b502453f2e77fe6a-11-irina-shayk.rsocial.w1200.jpg",
      message: "Hey! how are you 😊",
    },
    {
      name: "Irina Shayk",
      image:
        "https://pyxis.nymag.com/v1/imgs/54d/47e/abf97d3b9f09a58953b502453f2e77fe6a-11-irina-shayk.rsocial.w1200.jpg",
      message: "Hows it going!",
    },
    {
      message: "Good 👍",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH IRINA ON 05/06/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
