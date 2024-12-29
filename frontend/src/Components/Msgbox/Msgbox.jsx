import React, { useRef, useEffect } from "react";
import "./Msgbox.css";
function Msgbox({ messages, setMessages }) {
  const textareaRef = useRef(null);
  const handleBackendRequest = async (e) => {
    const response = await fetch("http://127.0.0.1:5000/get_data", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ question: messages[messages.length - 1].msg }),
    });

    if (!response.ok) {
      console.error("No response bruh!");
    }

    console.log(response.status + "successs ahda monu");

    const data = await response.json();
    //setResponseData(data['output']);
    setMessages((prevMessages) => [
      ...prevMessages,
      { msg: data["output"], isbot: true },
    ]);
    //speakText(data['output'])
  };
  useEffect(() => {
    if (messages.length > 0 && messages.length % 2) {
      console.log("end message: " + messages[messages.length - 1]);
      handleBackendRequest();
    }
  }, [messages]);
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
