import React, { useState, useEffect } from 'react';

function NotesPage(){

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  // Завантаження нотаток з Local Storage при запуску додатка
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Збереження нотаток у Local Storage при зміні
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

  return (
    <div>
      <h1>My Notes</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
        
}
export default NotesPage;