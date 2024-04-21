import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import CustomerDrawerNavigation from '../components/CustomerDrawerNavigation';
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator 
        initialRouteName='home'
        drawerContent={props => <CustomerDrawerNavigation {...props}/>}
       >
        <Drawer.Screen name="home" component={HomeScreen}/>
        <Drawer.Screen name="contact" component={ContactScreen}/>
    </Drawer.Navigator>
  )
}

export default AppDrawer