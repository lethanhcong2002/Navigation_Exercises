import React from 'react'
import { View, Text } from 'react-native'

function HomeScreen() {
  return (
    <View style={{flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, paddingBottom: 10}}>Stack -{'>'} Drawer -{'>'} Bottom Tab</Text>
      <Text style={{fontSize: 30}}>Home</Text>
    </View>
  )
}

export default HomeScreen