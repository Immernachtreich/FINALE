import React from 'react';
import SplashScreen from './components/splash_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './models/util';
import Welcome from './components/welcome';
import Signup from './components/signup';
import Home_Screen from './components/home_screen';
import Login from './components/login';

const RootStack = createStackNavigator<RootStackParamsList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen name="Signup" component={Signup} />
        <RootStack.Screen name="HomeScreen" component={Home_Screen} />
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
