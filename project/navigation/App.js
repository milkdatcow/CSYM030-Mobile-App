import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import screens from screens folder
import Posts from './screens/Posts';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Calculator from './screens/Calculator';

//create stack object 
//const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();
const StackTwo = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
  <StackTwo.Navigator>
      <Stack.Screen name='LoginScreen' component={Login}/>
      <Stack.Screen name='WelcomeScreen' component={HomeTabs}/>
  </StackTwo.Navigator>
  </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    //create navigation structure and assign a name to each screen
      <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={Welcome} options={{tabBarLabel:'Welcome'}}/>
        <Stack.Screen name='PostsScreen' component={Posts} options={{tabBarLabel:'Posts'}}/>
        <Stack.Screen name='CalculatorScreen' component={Calculator} options={{tabBarLabel:'Calculator'}}/>
      </Stack.Navigator>
  );
}

