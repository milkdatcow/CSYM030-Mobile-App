import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from "../style";
import { SafeAreaView } from 'react-native-safe-area-context';

const Games = ({navigation}) => {
  const data = [
    {id:1,screen:"QuizScreen",name:"Quiz"},
    {id:2,screen:"DiceScreen",name:"Dice Game"}
  ];

  return (
    //create button to navigate to posts screen - navigation.navigate("screen")
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Games</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item})=>(
            <View style={styles.items}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screen)}>
              <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
            )}
            />
    </SafeAreaView>
  )
}

export default Games