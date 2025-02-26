import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, } from 'react-native';
import React from 'react'
import styles from "../style"
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';



const Login = ({navigation}) => {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");

    function loginUser(pusername, ppassword){

        if(pusername == 'John' && ppassword =='password'){
            navigation.navigate('WelcomeScreen');
        }else{
            Alert.alert("Login Failed...");
        }
    }

  return (
    <View style={styles.container}>
    <View><Text style={styles.h1}>Login</Text></View>
    <View><TextInput placeholder='Username' style={styles.input} value={userName} onChangeText={text=>setUserName(text)}></TextInput></View>
    <View><TextInput placeholder='Password' style={styles.input} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}></TextInput></View>
    <TouchableOpacity style={styles.button} onPress={()=>loginUser(userName,password)}><Text>Sign In</Text></TouchableOpacity>
    </View>
  )
}

export default Login