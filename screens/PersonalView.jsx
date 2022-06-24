import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Background } from '../components/Background';
import {Rooms2} from '../assets/data/Rooms';


baseUrl = '145.49.33.11:7000'
// baseUrl = '127.0.0.1:7000'

const GetApiData = async() => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000)
  await fetch(`http://${baseUrl}/getdata`, {
    method: 'GET',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json'}
    })      
    .then((response) => response.json())
    .then((json) => {console.log(json[0])})
    .catch((error) => {console.log(error); throw error})
    clearTimeout(timeoutId);
  }



export const PersonalView = () => {
  const randomData = () => {
    return (Math.round((Math.random() * 35)/5 ) * 5)
  }

  return (
    <View style={styles.container}>
        <Background />
        <Text style={styles.title}>Personal View Component</Text>
        

        <TouchableOpacity style={styles.button} onPress={() => console.log(randomData())}>
            <Text style={styles.buttonText}>Get Request</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>
          </Text>
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={() => console.log('data')}>
            <Text style={styles.buttonText}>MqttHandler</Text>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      margin: 50,
      textAlign: 'center'
    },
    text: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center'
    },
    button: {
      margin: 50,
      backgroundColor: '#fff',
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      padding: 10
    }

})