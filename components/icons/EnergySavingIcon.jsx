import {Text, View, StyleSheet, Image} from 'react-native'

 

const energy_images = {
    0: require('../../assets/icons/energySavings/0.png'),
    5: require('../../assets/icons/energySavings/5.png'),
    10: require('../../assets/icons/energySavings/10.png'),
    15: require('../../assets/icons/energySavings/15.png'),
    20: require('../../assets/icons/energySavings/20.png'),
    25: require('../../assets/icons/energySavings/25.png'),
    30: require('../../assets/icons/energySavings/30.png'),
    35: require('../../assets/icons/energySavings/35.png')
}

export const EnergySavingIcon = ({size, perc}) => {
  return (
    <View>
        <View style={styles.logoContainer}>
            <Image source={energy_images[perc]} style={[styles.logo, {width:size, height: size }]} />
            <View style={styles.innerText}>
                <Text style={styles.title}>{perc}%</Text>
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
        justifyContent: "center",
        position: 'relative'
    },

    innerText: {
        position: "absolute",
        width: 100,
        top: 30,
        left: 50,
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
