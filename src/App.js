import "./App.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebars/Sidebar";
import Navbar from "./components/Navbars/Navbar";
import Notes from "./components/Notes/Notes";
import Form from "./components/Forms/Form";
import Modal from "./components/Modals/Modal";
import Reminders from "./components/Features/Reminders";

const App = () => {
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "light",
  );
  const [activeView, setActiveView] = useState("notes");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const editNote = (id, updatedNote) => {
    setNotes((prevnotes) =>
      prevnotes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note,
      ),
    );
  };

  const setReminder = (id, reminderAt) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, reminderAt } : note,
      ),
    );
  };

  const clearReminder = (id) => setReminder(id, "");

  const openModal = (note) => {
    setIsModalOpen(true);
    setEditingNote(note);
  };

  const closeModal = () => {
    setEditingNote(null);
    setIsModalOpen(false);
  };

   //Manually Added Feature : Search Feature
  const [search, setSearch ] = useState("")

  const searchResults = search.trim().toLowerCase();
  const noteResults = searchResults ? notes.filter((note)=>(note.title ?? "").toLowerCase().includes(searchResults) || (note.text ?? "").toLowerCase().includes(searchResults) ) : notes;
  const addNote = (note) => {
    setNotes((prevnotes) => {
      return [...prevnotes, note];
    });
  };

  const reminderResults = noteResults.filter((note) => note.reminderAt);

  return (
    <div className={`app theme-${theme}`}>
      <Navbar
        search={search}
        onQueryChange={setSearch}
        theme={theme}
        onThemeChange={setTheme}
      />
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      {activeView === "notes" ? (
        <>
          <Form addNote={addNote} />
          <Notes
            notes={noteResults}
            deleteNote={deleteNote}
            openModal={openModal}
            setReminder={setReminder}
            clearReminder={clearReminder}
          />
        </>
      ) : (
        <Reminders
          notes={reminderResults}
          deleteNote={deleteNote}
          openModal={openModal}
          setReminder={setReminder}
          clearReminder={clearReminder}
        />
      )}
      <Modal
        isModalOpen={isModalOpen}
        editNote={editNote}
        editingNote={editingNote}
        closeModal={closeModal}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
