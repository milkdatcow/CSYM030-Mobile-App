import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";
import { SafeAreaView } from 'react-native-safe-area-context';


const Welcome = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Welcome</Text>
        
    </SafeAreaView>
  )
}

export default Welcome