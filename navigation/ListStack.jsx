import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ListView } from '../screens/ListView';
import { ListViewInfo } from '../screens/ListViewInfo';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export const ListStackComp = ({listData}) => {

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
          name="ListView" 
          // component={ListView} 
          children={() => <ListView listData={listData}/>}
        />
        <Stack.Screen name="ListViewInfo" component={ListViewInfo} />
    </Stack.Navigator>
  )
}