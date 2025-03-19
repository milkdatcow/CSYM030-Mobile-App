import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, AsyncStorage } from 'react-native';
import React from 'react'
import styles from "../style"
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

let STORAGE_KEY = '@user_input'


const Login = ({navigation}) => {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const users = [
      {user:'John',pass:'password'},
      {user:'Charlie',pass:'password1'}
    ]
  
    function loginUser(){
      for(var i=0;i<users.length;i++){
        console.log(i+ " "+users[i].user);
        console.log(i+ " "+users[i].pass);
       if(userName == users[i].user && password == users[i].pass){
        Alert.alert("Login Successful!");
        navigation.navigate("WelcomeScreen")
        break;
       }else{
        Alert.alert("Login Failed...");
       }
      }
      
    }

    const[input,setInput] = useState("");

    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, age);
        alert('data successfully saved')
      } catch (e) {
        alert('error failed saving')
      }
    };

    const dataRetrieve = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          setInput(value);
        }
      } catch (e) {
        alert('error retrieving data')
      }
    };

    const onChangeText = value => setInput(value);

    const onSubmitEditing = () =>{
      if(!input) return;

      saveData(input);
      setInput("");
    }


  return (
    <View style={styles.container}>
    <View><Text style={styles.h1}>Login</Text></View>
    <View><TextInput placeholder='Enter input' style={styles.input} value={input} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}></TextInput>
    <Text>Your input is {input}</Text>
    </View>
    
    
    <View><TextInput placeholder='Enter password' style={styles.input} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}></TextInput></View>
    <TouchableOpacity style={styles.button} onPress={()=>loginUser(userName,password)}><Text>Sign In</Text></TouchableOpacity>
    </View>
  )
}

export default Login