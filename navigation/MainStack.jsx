import React from 'react'
import { MainView } from '../screens/MainView';
import { MainViewInfo } from '../screens/MainViewInfo';
import { MainViewComfortFeedback } from '../screens/MainViewComfortFeedback';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();


export const MainStack = ({data, room}) => {

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
          name="MainView" 
          // component={MainView} 
          children={() => <MainView data={data} room={room} />}
        />
        
        <Stack.Screen 
          name="MainViewInfoThermal"  
          // component={MainViewInfoThermal}
          children={() => <MainViewInfo data={data} screen={"Thermal"} room={room}/>}
        />

        <Stack.Screen 
          name="MainViewInfoVisual"  
          // component={MainViewInfoVisual}
          children={() => <MainViewInfo data={data} screen={"Visual"} room={room}/>}
        />

        <Stack.Screen 
          name="MainViewInfoSocial" 
          // component={MainViewInfoSocial}
          children={() => <MainViewInfo data={data} screen={"Social"} room={room}/>} 
        />

        <Stack.Screen
          name="MainViewComfortFeedback"
          // component={MainViewInfo}
          children={() => <MainViewComfortFeedback data={data}/>}
        />

    </Stack.Navigator>
  )
}