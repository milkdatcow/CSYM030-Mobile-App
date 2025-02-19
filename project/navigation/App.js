import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import screens from screens folder
import Posts from './screens/Posts';
import Welcome from './screens/Welcome';

//create stack object 
//const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    //create navigation structure and assign a name to each screen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={Welcome} options={{tabBarLabel:'Welcome'}}/>
        <Stack.Screen name='PostsScreen' component={Posts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

