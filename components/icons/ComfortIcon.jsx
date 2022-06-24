import React from 'react'
import {Image, StyleSheet, Text, View, Button} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Background } from '../Background'

export const ComfortIcon = ({size, perc}) => {
  return (
    <View style={styles.iconContainer}>
        <ProgressCircle
                    percent={perc}
                    radius={size}
                    borderWidth={5}
                    color="#e2b673"
                    shadowColor="rgba(32,61,60,1)"
                    bgColor="rgb(32,61,60)"
                    children={
                        <>
                            <Background />
                            <Text style={styles.title}>{perc}</Text>
                            <Text style={styles.text}>% </Text>
                        </>
                    }
                />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})