import {useEffect, useState} from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';



const baseUrl = '192.168.0.111:5000'

const getDataAlert = (message) => {
  data = message.measurements
  Alert.alert(
    String(message.id), 
    String(message.measurements), 
  { text: 'OK', onPress: () => console.log('OK Pressed') })
}


export const GetApiData = async() => {
        console.log('MqttHandler')
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000)
        await fetch(`http://${baseUrl}/sensordata`, {
          method: 'GET',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json'}
          })      
          .then((response) => response.json())
          .then((json) => {return(String(json.measurements[0].temperature))})
          .catch((error) => {console.log(error); throw error})
          clearTimeout();
        }
    
  
// export const GetApiData = ({typeId}) => {
//   const [data, setData] = useState([{}])
 
//   useEffect(() => {
//     const MqttHandler = async() => {
//       console.log('MqttHandler')
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 3000)
//       await fetch(`http://${baseUrl}/sensordata`, {
//         method: 'GET',
//         headers: { Accept: 'application/json', 'Content-Type': 'application/json'}
//         })      
//         .then((response) => response.json())
//         .then((json) => {setData(json), console.log(json)} )
//         .catch((error) => {console.log(error); throw error})
//         clearTimeout();
//       }

//       MqttHandler();

//     }, [])

//     return(
//       // data[0][typeId]
//       <></>
//     )
//   }
