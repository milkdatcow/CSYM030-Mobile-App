import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";

const Games = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View style={styles.container}>
        <Text>Welcome</Text>
        <TouchableOpacity style={{borderWidth: 1, padding:10}} onPress={() => navigation.navigate("QuizScreen", {comment: "1"})}>
            <Text>Quiz</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Games