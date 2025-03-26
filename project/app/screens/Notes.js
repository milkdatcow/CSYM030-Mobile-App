import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AddNote from '../components/AddNote'; 
import styles from "../style";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'First Note', content: 'This is my first note' },
    { id: 2, title: 'Second Note', content: 'This is my second note' },
  ]);

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(), // Using timestamp as a simple unique ID
      title,
      content,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddNote 
        notes={notes}
        onAddNote={addNote}
        onDeleteNote={deleteNote}
      />
    </SafeAreaView>
  );
}