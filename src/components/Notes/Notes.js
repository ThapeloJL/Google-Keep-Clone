import React from "react";
import "./notes.css"; // eslint-disable-next-line no-console
import Note from "./Note";// eslint-disable-next-line no-console

const Notes = (props) => {
  const { notes, deleteNote, openModal, setReminder, clearReminder } = props;

  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            text={note.text}
            deleteNote={deleteNote}
            openModal={openModal}
            reminderAt={note.reminderAt}
            setReminder={setReminder}
            clearReminder={clearReminder}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
