
import { useState, useEffect } from 'react';
import { StyleSheet , Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen } from './screens/SplashScreen';
import { RoomView } from './screens/RoomView'
import { BottomTabNavigator } from './components/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Background } from './components/Background';
import { Rooms2 } from './assets/data/Rooms';
import { baseUrl } from './assets/data/baseUrl';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {  

  const [apiData, setApiData] = useState('Loading...');
  const [listApiData, setListApiData] = useState([])  
  const [room, setRoom] = useState('')

  const GetListApiData = async(light, temp, audio, occ, room, key) => {
    setListApiData([])
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000)
    await fetch(`http://${baseUrl}:7000/listmodel`, {
      method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          'temp': temp,
          'light': light,
          'audio': audio,
          'occ': occ
          }),
          signal: controller.signal
      })   
      .then((response) => response.json())
      .then((json) => {setListApiData(listApiData => [...listApiData, {title: room, value:json[0], key:key}])})
      .catch((error) => {throw error})
      clearTimeout(timeoutId);
    }

  useEffect(() => {
    const GetApiData = async() => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      await fetch(`http://${baseUrl}:5000/sensordata`, {
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json'}
        })      
        .then((response) => response.json())
        .then((json) => {setApiData(json.measurements[0])})
        .catch((error) => {throw error})
        clearTimeout(timeoutId);
      }
    GetApiData();

    Rooms2.forEach(room => {
      GetListApiData(room.light, room.temp, room.audio, room.occ, room.title, room.id)
    })
  }, []);
  
  return (
    <>
      <Background />
       <NavigationContainer style={styles.backgroundColor} theme={{colors:{background: '#000'}}}>
       

        <StatusBar hidden={true} />

        <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
        >
          <Stack.Screen 
            name="RoomView" 
            children={() => <RoomView setRoom={setRoom}/>}
          />
          <Stack.Screen 
            name="BottomTabNavigator" 
            children={()=> <BottomTabNavigator room={room} data={apiData} listData = {listApiData}/>}
          />
        </Stack.Navigator>

        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  backgroundColor: {
    backgroundColor: '#000'
  }

});
