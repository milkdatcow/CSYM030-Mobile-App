import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from './style';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Update Password</Text>
      </View>
      <View>
        <Text style={styles.h2}>Current Password</Text>
        <TextInput style={styles.input} placeholder="..." secureTextEntry={true}></TextInput>
      </View>
      <View>
        <Text style={styles.h2}>New Password</Text>
        <TextInput style={styles.input} placeholder="..." secureTextEntry={true}></TextInput>
      </View>
      <View>
        <Text style={styles.h2}>Confirm New Password</Text>
        <TextInput style={styles.input} placeholder="..." secureTextEntry={true}></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}
