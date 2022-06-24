import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { useNavigation } from '@react-navigation/native'
import { BigBoxRoomList } from '../components/BigBox'


export const RoomView = ({setRoom}) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Background />
            <Logo />
            
            <BigBoxRoomList/>

            <TouchableOpacity onPress={()=> navigation.navigate("BottomTabNavigator")}>
                <Text style={styles.btnText}>Test</Text>
            </TouchableOpacity>
              
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    },
    text:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 100,
    },
    listTitle: {
        fontSize: 20,
        color: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        fontWeight: "bold"
    },

    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    middle: {
        borderRadius: 30,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        
    },
    itemContainer: {
      padding: 0,
      margin: 0
    },

    item: {
        flexDirection: "row",
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 15,
        borderBottomWidth: .2,
        borderBottomColor: "white",
    }
})