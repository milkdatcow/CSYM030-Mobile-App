import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../style";
import { Home } from "react-native-feather";

const Welcome = ({ navigation }) => {
  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Clear the loggedInUser from AsyncStorage
      await AsyncStorage.removeItem('loggedInUser');
      Alert.alert("Logged Out", "You have been successfully logged out");
      
      // Navigate back to Login screen
      navigation.replace("LoginScreen");
    } catch (error) {
      console.log('Error during logout', error);
      Alert.alert("Error", "Failed to log out");
    }
  };

  return (
    <View style={styles.welcome}>
      <Text style={styles.h1}>Welcome</Text>
      <Home stroke="black" width={32} height={32} />
      
      {/* Logout Button */}
      <TouchableOpacity 
        style={[styles.button, { marginTop: 20 }]} 
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;