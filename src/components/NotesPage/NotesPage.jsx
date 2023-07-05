import { useState, useEffect } from "react";
import Header from "../Header/Header";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState("");


  // додавання замітки
  const handleAddNote = () => {
    if (inputText.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputText,
      };
      setNotes([...notes, newNote]);
      setInputText("");
    }
  };

  //збереження заміток в локал
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

   //завантаження заміток з локального
   useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

 // видалення замітки
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

//редагування 
  const handleEditNote = (id) => {
    const note = notes.find((note) => note.id === id);
    setEditedNoteText(note.text);
    setEditingNoteId(id);
  };

  //оновлення замітки після редагуванн
  const handleUpdateNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === editingNoteId) {
        return {
          ...note,
          text: editedNoteText,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditingNoteId(null);
  };

  return (
    <div>
      <Header />
      <div className="backround-content">
        <div className="notes-app">
          <div className="notes-app__input-section">
            <div className="notes-app__input-section-text">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="notes-app__input-text"
                placeholder="Text..."
              />
            </div>
            <button
              onClick={handleAddNote}
              className="notes-app__add-button"
              aria-label="add-note"
            >
              Add Note
            </button>
          </div>

          <ul className="notes-app__note-list">
            {notes.map((note) => (
              <li key={note.id} className="notes-app__note-item">
                {editingNoteId === note.id ? (
                  <div className="notes-app__note--editing">
                    <div className="textarea-bg">
                      <textarea
                        className="notes-app__note-textarea"
                        value={editedNoteText}
                        onChange={(e) => setEditedNoteText(e.target.value)}
                        aria-label="write-text"
                      />
                      <div className="notes-app__note-buttons">
                        <button
                          onClick={handleUpdateNote}
                          className="notes-app__save-button"
                          aria-label="save-changes"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="lol">
                    <div className="notes-app__note-span">
                      <span className="notes-app__note-text">{note.text}</span>
                    </div>
                    <div className="notes-app_button">
                      <button
                        onClick={() => handleEditNote(note.id)}
                        className="notes-app_button_edit"
                        aria-label="edite-note"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="notes-app_button_delete"
                        aria-label="delete-note"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotesApp;
