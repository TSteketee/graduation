import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const occupancy_images = {
    0: require('../../assets/icons/occupancy/0.png'),
    1: require('../../assets/icons/occupancy/1.png'),
    2: require('../../assets/icons/occupancy/2.png'),
    3: require('../../assets/icons/occupancy/3.png')
}

const audio_images = {
    0: require('../../assets/icons/audio/0.png'),
    1: require('../../assets/icons/audio/1.png'),
    2: require('../../assets/icons/audio/2.png'),
    3: require('../../assets/icons/audio/3.png'),
    4: require('../../assets/icons/audio/4.png'),
    5: require('../../assets/icons/audio/5.png')
}

const audioRatio = 4100 / 2963
const occupancyRatio =  4097 / 2051


const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const calculateOccupancy = (occupancy) => {
    const max = 15
    if (occupancy == 0) {return occupancy}
    if (occupancy >= max) {return 3}
    return(Math.ceil(scale(occupancy, 0, 15, 0, 3)))
}

const calculateAudio = (audio) => {
    if (audio == 0) {return audio}
    if (audio >= 75) {return 5}
    return (Math.ceil(scale(audio, 20, 75, 0, 5)))
}

export const SocialIcon = ({size, data}) => {
    const audioHeight = size 
    const audioWidth = size * audioRatio

    const occupancyHeight = size 
    const occupancyWidth = size * occupancyRatio

    const occupancy = calculateOccupancy(data.occ)
    const audio = calculateAudio(data.audio)

    return (
        <View style={styles.container}>
            <View style={styles.spanContainer}>
                <View style={styles.span}>
                    <Text style={styles.text}>
                        Occupancy
                    </Text>
                </View>

                <View style={styles.span}>
                    <View style={styles.logoContainer}>
                        <Image source={occupancy_images[occupancy]} style={[styles.logo, {width:occupancyWidth, height: occupancyHeight }]} />
                    </View>
                </View>

                <View style={styles.span}>
                    <Text style={styles.text}>
                        {Math.round(data.occ)}
                    </Text>
                </View>
            </View>

            <View style={styles.spanContainer}>

                <View style={styles.span}>
                    <Text style={styles.text}>
                        Audio
                    </Text>
                </View>

                <View style={styles.span}>
                    <View style={styles.logoContainer}>
                        <Image source={audio_images[audio] } style={[styles.logo, {width:audioWidth, height: audioHeight }]} />
                    </View>
                </View>

                <View style={styles.span}>
                    <Text style={styles.text}>
                        {Math.round(data.audio)} dB
                    </Text>
                </View>

            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        alignContent: "center",
        justifyContent: "center"
    },
    spanContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },

    span: {
        marginBottom: 10,
        marginRight: 10
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})
