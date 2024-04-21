import React from 'react'
import { View } from 'react-native';
import { Drawer } from 'react-native-paper';


function CustomerDrawerNavigation({navigation}) {


  return (
    <View style={{marginTop: 20}}>
        <Drawer.Section title="Muhahahaha">
            <Drawer.Item
                label="Home"
                icon={"home"}
                onPress={() => navigation.navigate("home")}
            />
            <Drawer.Item
                label="Contact"
                icon={"email"}
                onPress={() => navigation.navigate("contact")}
            />
            </Drawer.Section>
    </View>
  );
}

export default CustomerDrawerNavigation