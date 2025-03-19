import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react';
import styles from "../style";
import { SafeAreaView } from 'react-native-safe-area-context';

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
      }catch{errror}{
      }
    }
  */

  const data = [
    {id:'1', name:'Emanuella', age:26, img:'../images/ActualBingus.webp'},
    {id:'2', name:'Kofi', age:27, img:'../images/ActualBingus.webp'},
    {id:'3', name:'Amy', age:28, img:'../images/ActualBingus.webp'},
    {id:'4', name:'John', age:50, img:'../images/ActualBingus.webp'},
  ];
 
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Posts</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item})=>(
          <View style={styles.items}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Image style={styles.image} source={require('../images/ActualBingus.webp')} />
          </View>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        
        />
    </SafeAreaView>
  )
}

export default Posts