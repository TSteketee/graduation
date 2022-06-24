import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"
import { useNavigation } from '@react-navigation/native';

export const BackBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.backBtn} title="Back" onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
    )
    }


const styles = StyleSheet.create({
    backBtn: {
        elevation: 2,
        backgroundColor: '#e2b673',
        // backgroundColor: '#2196F3'
        padding: 10,
        paddingHorizontal: 30,
        margin: 10,
        borderRadius: 100,
        position: "absolute",
        bottom: 0,
        right: 0,

        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 2,
      },    

      btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
})