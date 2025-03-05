import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";

const Welcome = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View style={styles.container}>
        <TouchableOpacity style={{borderWidth: 1, padding:10}} onPress={() => navigation.navigate("PostsScreen", {comment: "1"})}>
            <Text>Post Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Welcome