import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "../style";
import { Home } from "react-native-feather";


const Welcome = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View style={styles.container}>
        <Text style={styles.h1}>Welcome</Text>
        <Home stroke="black" width={32} height={32}/>
        
    </View>
  )
}

export default Welcome