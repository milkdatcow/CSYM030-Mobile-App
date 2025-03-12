import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home, Mail, DivideCircle, Box } from "react-native-feather";
//icons: https://feathericons.com
//import screens from screens folder
import Posts from './screens/Posts';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Calculator from './screens/Calculator';
import Games from './screens/Games';
import Quiz from './screens/Quiz';

//create stack object 
//const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();
const StackTwo = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
  <StackTwo.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='LoginScreen' component={Login}/>
      <Stack.Screen name='WelcomeScreen' component={HomeTabs}/>
      <Stack.Screen name='QuizScreen' component={Quiz} options={{tabBarLabel:'Quiz'}}/>
  </StackTwo.Navigator>
  </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    //create navigation structure and assign a name to each screen
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#219EBC"
      }}>
        <Stack.Screen name='WelcomeScreen' component={Welcome} 
        options={{
          tabBarLabel:'Welcome',
          tabBarIcon:({ focused,color, size }) => {
            const icon=focused?"bell":"home";
            return (
            <Home name={icon} color={color} size={size} />)}
          }}/>

        <Stack.Screen name='PostsScreen' component={Posts} 
        options={{
          tabBarLabel:'Posts',
          tabBarIcon:({ focused,color, size }) => {
            const icon=focused?"bell":"home";
            return (
            <Mail name={icon} color={color} size={size} />)}
          }}/>

        <Stack.Screen name='CalculatorScreen' component={Calculator} 
        options={{
          tabBarLabel:'Calculator',
          tabBarIcon:({ focused,color, size }) => {
            const icon=focused?"bell":"home";
            return (
            <DivideCircle name={icon} color={color} size={size} />)}
          }}/>

        <Stack.Screen name='GamesScreen' component={Games} 
        options={{
          tabBarLabel:'Games',
          tabBarIcon:({ focused,color, size }) => {
            const icon=focused?"bell":"home";
            return (
            <Box name={icon} color={color} size={size} />)}
          }}/>

      </Stack.Navigator>
  );
}

