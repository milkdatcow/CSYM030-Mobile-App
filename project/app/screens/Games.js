import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";

const Games = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View style={styles.container}>
        <Text style={styles.h1}>Games</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QuizScreen")}>
            <Text>Quiz</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Games