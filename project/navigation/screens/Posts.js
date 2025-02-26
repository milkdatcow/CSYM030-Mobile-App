import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Posts = () => {
  /*  
  const data = route.params; //one way of getting data being recieved
    console.log(data.comment);
    const {comment} = route.params; //another way of getting data being recieved
    */

    /*const fetchUser = async() =>{
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${comment}`);
        const data = await response.json();
        console.log(data);
      }catch{errror}
    }
      */

 


  return (
    <View>
        <Text>Posts</Text>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})