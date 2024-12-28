import React, { useState, useEffect, useRef } from "react";
import "./Chatui.css";
function Chatui({ messages, setMessages }) {
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [messages]);
  return (
    <div className="chat-container container-fluid col-12">
      {messages.length === 0 ? (
        <h1>What can i help with?</h1>
      ) : (
        <div className="messages-wrapper">
          {messages.map((message, index) => (
            <div
              key={index}
              ref={index === messages.length - 1 ? lastMessageRef : null}
              className={message.isbot ? "bot-msg" : "user-msg"}
            >
              {<p>{message.msg}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chatui;
