import React, { useState } from "react";

const Note = (props) => {
  const {
    openModal,
    id,
    deleteNote,
    title,
    text,
    reminderAt,
    setReminder,
    clearReminder,
  } = props;
  const [isHover, setHover] = useState(false);

  const noteClickHandler = () => {
    openModal({ id, title, text });
  };
  const hoverHandlerOver = () => {
    setHover(true);
  };
  const hoverHandleOut = () => {
    setHover(false);
  };

  const deleteHandler = (event) => {
    event.stopPropagation();
    deleteNote(id);
  };

  return (
    <div
      className="note"
      id={id}
      onClick={noteClickHandler}
      onMouseOver={hoverHandlerOver}
      onMouseOut={hoverHandleOut}
    >
      {/* //onmouseover="" onmouseout=""//> */}
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

      <div className="title">{title}</div>
      <div className="text">{text}</div>
      {reminderAt && (
        <div className="note-reminder">
          <span className="material-symbols-outlined">schedule</span>
          <time dateTime={reminderAt}>{new Date(reminderAt).toLocaleString()}</time>
          <button
            type="button"
            aria-label="Remove reminder"
            onClick={(event) => {
              event.stopPropagation();
              clearReminder(id);
            }}
          >
            Remove
          </button>
        </div>
      )}
      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span
            className="material-symbols-outlined hover small-icon"
            onClick={(event) => event.stopPropagation()}
          >
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
          <input
            className="reminder-input"
            type="datetime-local"
            aria-label={`Set reminder for ${title || "note"}`}
            value={reminderAt || ""}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => setReminder(id, event.target.value)}
          />
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
