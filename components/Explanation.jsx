import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native'
import { EnergySavingIcon } from './icons/EnergySavingIcon'
import { ComfortIcon } from './icons/ComfortIcon'
import { Ionicons } from '@expo/vector-icons';
import { ModalComponent } from './ModalComponent'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const Explanation = () => {
    const [randomNumber, setRandomNumber] = useState(0)
    const [comfortLevel, setComfortLevel] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setRandomNumber(Math.round((Math.random() * 35)/5 ) * 5)
        setComfortLevel(Math.round(96 - (randomNumber * (20/35))))
    }, [])

  return (

    <View>
        <ModalComponent 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
        />
        <View style={{alignItems:"flex-end", marginRight:20}}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons
                        name="information-circle-outline"
                        size={30} 
                        color= {!modalVisible ? 'white' : 'rgba(255,255,255,0.2)'}
                    />
            </TouchableOpacity>

        </View>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <EnergySavingIcon size={100} perc={randomNumber}/>
                <Text style={styles.text}>Buildings Energy Saved</Text>
            </View>
            <View style={{flex:1}}>
                <ComfortIcon size={50} perc={comfortLevel}/>
                <Text style={styles.text}>Of people in this room are comfortable</Text>
            </View>

        </View>
    </View>

  )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: windowWidth* 0.9
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic'
    }
})