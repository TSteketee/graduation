import React, {useState} from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("window")


export const Room = () => {
  const navigation = useNavigation()


  return (
    <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>
            Room: LA222
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    textContainer: {
        position: 'absolute',
        left: width * 0.05,
        top: height * 0.1,
      },

})
