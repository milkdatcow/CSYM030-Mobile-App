import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function App() {
  const currentValue = "";
  const result = "";

  const handlePress = (value) => {
    currentValue((prev) => prev + value);
  };

  const calculateResult = () => {
    const evalResult = eval(currentValue).toString();
    currentValue = (evalResult);
    result = "";
  };  

  const clearInput = () => {
    currentValue = "";
    result = "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.output}>{currentValue}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}><Text>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}><Text>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}><Text>9</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}><Text>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}><Text>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}><Text>6</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}><Text>3</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}><Text>0</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.opbutton} onPress={() => handlePress("-")}><Text>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opbutton} onPress={() => handlePress("+")}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opbutton} onPress={calculateResult}><Text>=</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.opbutton} onPress={clearInput}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
