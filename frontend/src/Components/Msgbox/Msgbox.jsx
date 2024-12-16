import React from "react";
import "./Msgbox.css";
function Msgbox() {
  return (
    <div className="box-msg-outer row">
      <div className="box-msg  col-md-8">
        <textarea rows="20" col="2000" placeholder="Enter  Here..." />
      </div>
      <div className="snd-button  rounded-circle col-md-4 ">
        <i class="fas fa-paper-plane text-light mt-3"></i>
      </div>
    </div>
  );
}

export default Msgbox;
