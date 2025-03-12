import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='WelcomeScreen' component={Welcome} 
        options={{
          tabBarLabel:'Welcome',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );}
          }}/>
        
        
        
        <Stack.Screen name='PostsScreen' component={Posts} options={{tabBarLabel:'Posts'}}/>
        <Stack.Screen name='CalculatorScreen' component={Calculator} options={{tabBarLabel:'Calculator'}}/>
        <Stack.Screen name='GamesScreen' component={Games} options={{tabBarLabel:'Games'}}/>
      </Stack.Navigator>
  );
}

