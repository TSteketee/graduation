import { useState, useEffect } from "react"
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native"
import { Background } from "../components/Background"
import { Room } from "../components/Room"
import { BixBoxMainView } from "../components/BigBox"
import { useNavigation } from '@react-navigation/native';

import { ThermalIcon } from '../components/icons/ThermalIcon';
import { VisualIcon } from '../components/icons/VisualIcon';
import { SocialIcon } from "../components/icons/SocialIcon"

import { Explanation } from '../components/Explanation';
import { ScrollView } from "react-native-gesture-handler"
import { BackBtn } from "../components/BackBtn"
import { ScaleInput } from "../components/ScaleInput";
import { Divider } from "../components/Divider"

import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';
import { baseUrl } from "../assets/data/baseUrl"

const postDataAlert = (message, navigation) => {
  console.log(message)
  Alert.alert(
    String(message), 
    String(message) == "Aborted" ? "Er kan geen verbinding worden gemaakt met de server." :'Uw feedback is opgeslagen in de database en wordt gebruikt om de omgevingsvariabelen te bepalen.', 
    [String(message) == "Aborted" ? { text: 'OK'} : { text: 'OK', onPress: () => navigation.navigate("MainView")}]
  
  )
}
  
// MainViewInfoThermal compoenent
export const MainViewInfo = ({data, screen, room}) => {

  const navigation = useNavigation();
  const [uuid, setUuid] = useState('');
  const [comfort, setComfort] = useState('0');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  

  const postData = async(uuid, comfort, room) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000)
    setButtonDisabled(true);
    await fetch(`http://${baseUrl}:5000/submit`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        'uuid': uuid,
        'room': room,
        'comfort': comfort
        }),
        signal: controller.signal
      })
      .then((response) => response.json())
      .then((json) => {postDataAlert(json.result, navigation); setButtonDisabled(false)})
      .catch((error) => {postDataAlert(error.message, navigation); setButtonDisabled(false); throw error})
      clearTimeout();
  }

  // Get the uuid from the secure store
  useEffect(() => {
      SecureStore.getItemAsync('uuid').then(value => {
          if (value) {
              setUuid(value);
          } else {
              const newUuid = uuidv4();
              SecureStore.setItemAsync('uuid', newUuid);
              setUuid(newUuid);
          }
      });
  }, []);

  // Return component
  return (
    <View style={styles.container}>
      <Background />
      {/* <Logo /> */}
      <Room room={room}/>
      <BixBoxMainView style={styles.container}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Overall</Text>
            <Text style={styles.text}>Comfort</Text>
          </View>

          {/* Icon */}
          {/* <View style={{ alignItems:"center" }}>
            {screen == "Thermal" ? <ThermalIcon size={20} data={data}/> : null}
            {screen == "Visual" ? <VisualIcon size = {55} data={data}/> : null}
            {screen == "Social" ? <SocialIcon size= {35} data={data}/> : null}
          </View> */}

          {/* Thermal Explanation */}
          <View style={{marginVertical:40}}>
            <Explanation data={data}/>
          </View>
          
          <Divider />
          <View style={{alignItems:'center'}}>
            <Text style={styles.title}>
              Feedback
            </Text>
            <Text style={styles.text}>
              Overall comforts
            </Text>
          </View>
          
          <View style={{alignItems:"center"}}>
            <ScaleInput setComfort={setComfort}/>
          </View>

          {/* Navigate to feedback screen button */}
          <View style={{alignItems:"center"}}>
              <TouchableOpacity title="Submit" 
                                onPress={() => postData(uuid, comfort, 'LA222')}
                                // onPress={() => { postDataAlert('Aborted')  }}
                                disabled={buttonDisabled}
                                style={ buttonDisabled ? styles.submitBtnDisabled : styles.submitBtn}
              >
                <Text style={ buttonDisabled ? styles.btnTextDisabled : styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>




          {/* Space to show backbutton */}
          <View style={{height:75}}/>

        </ScrollView>
        <BackBtn />
      </BixBoxMainView>
    </View>
  )
}

// StyleSheet
// ---------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 15,
    color: '#fff'
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  submitBtn: {
    backgroundColor: '#e2b673',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 100
  },
  submitBtnDisabled: {
    backgroundColor: '#7b7b7b',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 100
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnTextDisabled: {
    color: '#313131',
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 1
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})