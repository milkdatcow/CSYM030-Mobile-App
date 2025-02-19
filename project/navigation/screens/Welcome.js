import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <View>
        <TouchableOpacity style={{borderWidth: 1, padding:10}} onPress={() => navigation.navigate("PostsScreen", {comment: "my favourite lecturer"})}>
            <Text>Post Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})