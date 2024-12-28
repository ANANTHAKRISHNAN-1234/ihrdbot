import React, { useState, useRef } from "react";
import "./Msgbox.css";
function Msgbox({ messages, setMessages }) {
  const textareaRef = useRef(null);
  const sendMsg = () => {
    const msg = textareaRef.current.value;
    if (msg !== "") {
      setMessages((prevMessages) => [...prevMessages, { msg, isbot: false }]);
      textareaRef.current.value = ""; // clear the textarea
    }
  };
  return (
    <div className="box-msg-outer col-12 row">
      <div className="box-msg  col-md-8">
        <textarea
          rows="20"
          col="2000"
          ref={textareaRef}
          placeholder="Enter Your Prompt Here..."
        />
      </div>
      <div className="snd-button  rounded-circle col-md-4 " onClick={sendMsg}>
        <i class="fas fa-paper-plane text-light mt-3"></i>
      </div>
    </div>
  );
}

export default Msgbox;
