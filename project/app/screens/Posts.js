import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react';
import styles from "../style";

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
    {id:'1', name:'Emanuella', age:26, img:'../assets/ActualBingus.webp'},
    {id:'2', name:'Kofi', age:27, img:'../assets/ActualBingus.webp'},
    {id:'3', name:'Amy', age:28, img:'../assets/ActualBingus.webp'},
    {id:'4', name:'John', age:50, img:'../assets/ActualBingus.webp'},
  ];
 
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Posts</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item})=>(
          <View style={styles.items}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Image style={styles.image} source={item.img}/>
          </View>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        
        />
    </View>
  )
}

export default Posts