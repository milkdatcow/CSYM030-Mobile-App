import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../style";

const Games = ({navigation}) => {
    const questions = [
        {id:1,question:'Where do pine marten prefer to live?',answer:'Pine trees',options:{
            one:'Sand dunes',
            two:'Pine trees',
            three:'River beds',
            four:'Caves'
        }},
      ]
    return (
    
    <View style={styles.container}>
        <Text>Quiz time!</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={questions}
        renderItem={({item})=>(
          <View style={styles.items}><Text>{item.name}</Text>
          <Text>{item.age}</Text></View>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        
        />
    </View>
  )
}

export default Games