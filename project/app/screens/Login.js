import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../style";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Predefined users
  const users = [
    { user: 'John', pass: 'password' },
    { user: 'Charlie', pass: 'password1' },
  ];

  //Check if user is already logged in when component mounts
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('loggedInUser');
        if (storedUser) {
          //If a user is found in AsyncStorage, skip to WelcomeScreen
          navigation.replace("WelcomeScreen");
        }
      } catch (error) {
        console.log('Error checking login status', error);
      }
    };
    checkLoginStatus();
  }, [navigation]);

  //Function to handle login
  const loginUser = async () => {
    let isAuthenticated = false;

    //Check credentials against predefined users
    for (let i = 0; i < users.length; i++) {
      if (userName === users[i].user && password === users[i].pass) {
        isAuthenticated = true;
        break;
      }
    }

    if (isAuthenticated) {
      try {
        //Store the logged-in user in AsyncStorage
        const userData = { user: userName, pass: password };
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(userData));
        Alert.alert("Login Successful!");
        console.log(userData);
        navigation.replace("WelcomeScreen");
      } catch (error) {
        Alert.alert("Error saving login data");
      }
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <View style={styles.welcome}>
      <Text style={styles.h1}>Login</Text>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;