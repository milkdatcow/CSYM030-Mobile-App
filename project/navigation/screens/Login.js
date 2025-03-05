import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, } from 'react-native';
import React from 'react'
import styles from "../style"
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';



const Login = ({navigation}) => {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const users = [
      {user:'John',pass:'password'},
      {user:'Charlie',pass:'password1'}
    ]

    function loginUser(pusername, ppassword){
      var success = false;
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

  return (
    <View style={styles.container}>
    <View><Text style={styles.h1}>Login</Text></View>
    <View><TextInput placeholder='Enter username' style={styles.input} value={userName} onChangeText={text=>setUserName(text)}></TextInput></View>
    <View><TextInput placeholder='Enter password' style={styles.input} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}></TextInput></View>
    <TouchableOpacity style={styles.button} onPress={()=>loginUser(userName,password)}><Text>Sign In</Text></TouchableOpacity>
    </View>
  )
}

export default Login