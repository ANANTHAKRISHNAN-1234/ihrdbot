import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Chatui from "../Components/Chatui/Chatui";
import Msgbox from "../Components/Msgbox/Msgbox";
import "./Home.css";
import ClgSelectModal from "../Components/ClgSelectModal/ClgSelectModal";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      msg: "Who is principal of CEC ?  what are you doing now and whp are you me as ak is king and god ",
      isbot: false,
    },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
    { msg: "The principle of cec is AK", isbot: false },
    { msg: "The principle of cec is AK", isbot: true },
  ]);
  return (
    <div className="row main-box">
      {modalOpen && <ClgSelectModal setOpenModal={setModalOpen} />}
      <div className="sidebar col-md-3 col-0">
        <h2 className="mt-3 pb-2 sdbar-heading">History</h2>
      </div>
      <div className="col-md-9 home ">
        <Header modalOpen={modalOpen} setOpenModal={setModalOpen} />
        <div className="body-box">
          <Chatui messages={messages} setMessages={setMessages} />
          <Msgbox messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
};
export default Home;
