import React from "react";
import Notes from "../Notes/Notes";

//Cursor Feature

const Reminders = ({ notes, deleteNote, openModal, setReminder, clearReminder }) => (
  <section className="reminders-view">
    <h2>Reminders</h2>
    {notes.length === 0 ? (
      <p>No reminders yet.</p>
    ) : (
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        openModal={openModal}
        setReminder={setReminder}
        clearReminder={clearReminder}
      />
    )}
  </section>
);

export default Reminders;
