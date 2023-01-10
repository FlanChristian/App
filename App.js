import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import ViewMap from './src/screens/ViewMap';
import LoginScreen3 from './src/screens/LoginandRegister'

const Stack = createStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Splash' headerMode="none">
      <Stack.Screen name="Slash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen3} />
      <Stack.Screen name="View" component={ViewMap} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}