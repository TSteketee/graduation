import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'


const ratio = 4167 / 3652 
const size = 50

export const Logo = () => {
  const height = size
  const width = size * ratio

  return (
    <SafeAreaView style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={[styles.logo,  {height:height, width:width}]} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: '10%',
    },
    logo: {
      alignContent: "center",
      justifyContent: "center"
    }
})