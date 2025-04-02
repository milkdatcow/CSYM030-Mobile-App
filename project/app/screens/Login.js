import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../style";
import { auth } from '../backend/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import { db } from '../backend/Firebase';

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () =>{
    console.log(name);
    console.log(password);

    
    try{
      //Login auth
      //const userCredential = await signInWithEmailAndPassword(auth, name, password)
      //console.log(userCredential);

      //add data
      //const docref = await addDoc(collection(db, "UserMD"), {
        //first : "Dylan",
        //last : "Bowyer"
      //});
      // //console.log("Document is written with ID: ", docref.id)

      createUserWithEmailAndPassword(auth, name, password).then(
        async(userCredentials)=>{
        console.log(userCredentials.user.uid);
        const uid = userCredentials.user.uid;

        const docref = await addDoc(collection(db, "UserMD"), {
          first : "Dylan",
          last : "Bowyer",
          UserID: uid,
        });
      });

      

    }catch (error){
      console.log(error);
    }
  };


  return (
    <View style={styles.centreContainer}>
      <Text style={styles.h1}>Login</Text>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;