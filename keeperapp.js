import React, { useState } from 'react';
import Note from './Note';
import './KeeperApp.css';
const KeeperApp = () => {
const [notes, setNotes] = useState([]);
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const addNote = () => {
if (title.trim() !== '' && content.trim() !== '') {
setNotes([...notes, { id: Date.now(), title, content }]);
setTitle('');
setContent('');
}
};
const deleteNote = (id) => {
const updatedNotes = notes.filter((note) => note.id !== id);
setNotes(updatedNotes);
};
return (
<div className="container">
<div className="header">
<h1>Keeper App</h1>
</div>
<div className="input-section">
<input
type="text"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<textarea
placeholder="Content"
value={content}
onChange={(e) => setContent(e.target.value)}
/>
<button className="add-button" onClick={addNote}>
Add Note
</button>
</div>
<div className="notes-list">
{notes.map((note) => (
<Note
key={note.id}
id={note.id}
title={note.title}
content={note.content}
onDelete={deleteNote}
/>
))}
</div>
</div>
);
};
export default KeeperApp;

