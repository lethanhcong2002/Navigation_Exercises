import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import { Icon } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

function AppBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 32, backgroundColor: 'tomato',}}>
      <Tab.Screen 
        name="home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source="home" color={color} size={24}/>
          )
        }}
      />
      <Tab.Screen 
        name="contact" 
        component={ContactScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source="email" color={color} size={24}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default AppBottomTab
