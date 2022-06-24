import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native"
import { Background } from "../components/Background"
import { BixBoxMainView } from "../components/BigBox"
import { Logo } from "../components/Logo"
import { ScaleInput } from "../components/ScaleInput"
import { useNavigation } from '@react-navigation/native';
import { ThermalIcon } from '../components/icons/ThermalIcon';
import { SocialIcon } from '../components/icons/SocialIcon';
import { VisualIcon } from '../components/icons/VisualIcon';
import { Divider } from '../components/Divider';
import { baseUrl } from '../assets/data/baseUrl';

import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBtn } from '../components/BackBtn';




const postDataAlert = (message, navigation) => {
  console.log(message)
  Alert.alert(
    String(message), 
    String(message) == "Aborted" ? "Er kan geen verbinding worden gemaakt met de server." :'Uw feedback is opgeslagen in de database en wordt gebruikt om de omgevingsvariabelen te bepalen.', 
    [String(message) == "Aborted" ? { text: 'OK'} : { text: 'OK', onPress: () => navigation.navigate("MainView")}]
  
  )
}
  


export const MainViewComfortFeedback = ({data}) => {

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
        <Logo />
        <BixBoxMainView style={styles.container}>
          <ScrollView
            // stickyHeaderIndices={[0]}
            // invertStickyHeaders={true}
          >
                


            <View style={styles.titleContainer}>
              <Text style={styles.title}>Feedback </Text>
              <Text style={styles.text}>Comfort</Text>
            </View>
    
    
            <View style={{marginBottom:50, alignItems:"center" }}>
              <ThermalIcon size={30} data={data}/>
              <SocialIcon size={30} data={data}/>
              <VisualIcon size={50} data={data}/>
            </View>

            <View>
              <Divider />
              <Text style={styles.text}>Comfort Feedback</Text>
            </View>

            <View>
              <ScaleInput setComfort={setComfort} />
            </View>
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
      justifyContent: 'center',
      marginBottom: 20,
    },
  
    text: {
      fontSize: 15,
      color: '#fff',
      textAlign: "center"
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
      margin: 10,
      borderRadius: 100
    },
    submitBtnDisabled: {
      backgroundColor: '#7b7b7b',
      padding: 10,
      paddingHorizontal: 30,
      margin: 10,
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