import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const thermal_images = {
    17: require('../../assets/icons/thermal/17.png'),
    18: require('../../assets/icons/thermal/18.png'),
    19: require('../../assets/icons/thermal/19.png'),
    20: require('../../assets/icons/thermal/20.png'),
    21: require('../../assets/icons/thermal/21.png'),
    22: require('../../assets/icons/thermal/22.png'),
    23: require('../../assets/icons/thermal/23.png'),
    24: require('../../assets/icons/thermal/24.png')
}

const ratio = 3950 / 1230

const calculateTemperature = (temp) => {
    temp > 24 ? temp = 24 : temp
    temp < 17 ? temp = 0 : temp
    return temp
}

export const ThermalIcon = ({size, data}) => {
    const height = size * ratio
    const width = size
    const temp = calculateTemperature(Math.round(data.temperature))

    return (
        <View style={styles.spanContainer}>
            <View style={styles.span}>
                <Text style={styles.title}>
                    {Math.round(data.temperature)} 
                </Text>
                <Text style={styles.text}>
                °C
                </Text>
            </View>

            <View style={styles.span}>
                <View style={styles.logoContainer}>
                    <Image source={thermal_images[temp]} style={[styles.logo, {width:width, height: height }]} />
                </View>
            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        alignContent: "center",
        justifyContent: "center"
    },
    spanContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    span: {
        marginRight: 10,
        alignItems: "center"
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '200'
    }
})
