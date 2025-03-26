import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity, } from 'react-native';
import NoteItem from './NoteItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../style";

const NotesScreen = ({ notes, onAddNote, onDeleteNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      onAddNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  const renderNote = ({ item }) => (
    <NoteItem 
      note={item}
      onDelete={onDeleteNote}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Note Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Note Content"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleAddNote}>
              <Text>Add Note</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={item => item.id.toString()}
        
      />
    </SafeAreaView>
  );
};


export default NotesScreen;