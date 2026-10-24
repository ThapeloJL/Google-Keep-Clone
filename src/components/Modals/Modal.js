import React, { useState } from "react";
import "./modal.css";
import Form from "../Forms/Form";

const Modal = (props) => {
  const { isModalOpen, editNote, editingNote, closeModal, deleteNote } = props;

  const [hasCursor, setCursor] = useState(false);

  const handleCloseModal = () => {
    !hasCursor && closeModal();
  };
  const handleMouseOverModal = () => {
    setCursor(true);
  };
  const handleMouseOutModal = () => {
    setCursor(false);
  };

  return (
    <div>
      <div
        className={`modal ${isModalOpen ? "open-modal" : ""}`}
        onClick={handleCloseModal}
      >
        <div
          className="modal-content"
          onMouseOver={handleMouseOverModal}
          onMouseOut={handleMouseOutModal}
        >
          {isModalOpen && (
            <Form
              edit
              editingNote={editingNote}
              editNote={editNote}
              closeModal={closeModal}
              deleteNote={deleteNote}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
