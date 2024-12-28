import React, { useState, useEffect } from "react";
import "./ClgSelectModal.css";
function ClgSelectModal({ setOpenModal }) {
  const [checked, setChecked] = useState({
    selectAll: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const handleSelectAll = () => {
    setChecked({
      selectAll: !checked.selectAll,
      checkbox1: !checked.selectAll,
      checkbox2: !checked.selectAll,
      checkbox3: !checked.selectAll,
    });
  };
  const handleCheckboxChange = (event) => {
    setChecked((prevState) => ({
      ...prevState,
      [event.target.name]: !prevState[event.target.name],
    }));
  };
  useEffect(() => {
    const allChecked =
      checked.checkbox1 && checked.checkbox2 && checked.checkbox3;
    setChecked((prevState) => ({ ...prevState, selectAll: allChecked }));
  }, [checked]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Choose the College name that you want to know about?</h2>
        </div>
        <div className="choose-body">
          <ul>
            <li>
              <input
                type="checkbox"
                name="selectAll"
                checked={checked.selectAll}
                onChange={handleSelectAll}
              />
              <label>Select All</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="checkbox1"
                checked={checked.checkbox1}
                onChange={handleCheckboxChange}
              />
              <label>CEC</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checked.checkbox2}
                onChange={handleCheckboxChange}
              />
              <label>Model Eng Clg</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="checkbox3"
                checked={checked.checkbox3}
                onChange={handleCheckboxChange}
              />
              <label>Adoor IHRD</label>
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ClgSelectModal;
