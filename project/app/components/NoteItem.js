import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from "../style";  

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.listContainer}>
        <Text style={styles.h3}>{note.title}</Text>
        <Text style={styles.content}>{note.content}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(note.id)}>
                <Text>Delete</Text>
        </TouchableOpacity>
    </View>
  );
};


export default NoteItem;