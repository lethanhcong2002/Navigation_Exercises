import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import CustomNavigationBar from '../components/CustomNavigationBar';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
            header: (prop) => <CustomNavigationBar {...prop}/>,
            headerTintColor: "blue", 
            headerStyle:{
                backgroundColor: "aqua"},
        }}
    >
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="contact" component={ContactScreen}/>
    </Stack.Navigator>
  )
}

export default AppStack