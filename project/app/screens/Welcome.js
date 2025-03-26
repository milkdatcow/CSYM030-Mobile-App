import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../style";
import { Home } from "react-native-feather";

const Welcome = ({ navigation }) => {

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('loggedInUser');
      Alert.alert("Logged Out", "You have been successfully logged out");
      navigation.replace("LoginScreen");
    } catch (error) {
      Alert.alert("Error", "Failed to log out");
    }
  };

  return (
    <View style={styles.centreContainer}>
      <Text style={styles.h1}>Welcome</Text>
      <Home stroke="black" width={32} height={32} />
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