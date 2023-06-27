import { useState, useEffect } from 'react';
import Header from '../Header/Header';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (inputText.trim() !== '') {
      const newNote = {
        id: new Date().getTime(),
        text: inputText,
      };
      setNotes([...notes, newNote]);
      setInputText('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (id) => {
    const note = notes.find((note) => note.id === id);
    setEditingNoteId(id);
    setEditedNoteText(note.text);
  };

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
      <Header/>
      <div className='backround-content'>
      <div className="notes-app">
      <div className="notes-app__input-section">
        <div className="notes-app__input-section-text">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="notes-app__input-text"
            placeholder='Text...'
          />
        </div>
        <button onClick={handleAddNote} className="notes-app__add-button">Add Note</button>
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
                  />
                  <div className="notes-app__note-buttons">
                    <button onClick={handleUpdateNote} className="notes-app__save-button">Save</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='lol'>
                <div className='notes-app__note-span'>
                  <span className="notes-app__note-text">{note.text}</span>
                </div>
                <div className="notes-app_button">
                  <button onClick={() => handleEditNote(note.id)} className="notes-app_button_edit">Edit</button>
                  <button onClick={() => handleDeleteNote(note.id)} className="notes-app_button_delete">Delete</button>
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
