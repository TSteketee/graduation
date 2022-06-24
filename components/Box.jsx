import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { Background } from './Background'
import { ThermalIcon } from './icons/ThermalIcon'
import { SocialIcon } from './icons/SocialIcon'
import { VisualIcon } from './icons/VisualIcon'
import { useNavigation } from '@react-navigation/native'


export const Box = ({title, text, page, icon, data}) => {
    const navigation = useNavigation()
    
  return (
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(page)}>
        <View style={styles.middle}>
            <Background reverse={true} style={styles.bg}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.iconContainer}>
                <View>
                {icon == 'thermal' ? <ThermalIcon size={20} data={data} /> : null}
                {icon == 'social' ? <SocialIcon size={35}   data={data} /> : null}
                {icon == 'visual' ? <VisualIcon size={50 }   data={data} /> : null}
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    box: {
        borderRadius: 15,
        width: windowWidth * 0.9,
        height: windowHeight * 0.23,
        },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        color: "white",
    },
    textContainer: {
        flex: 1,
        // justifyContent: "center",
        alignItems:"flex-start",
        padding: 10,
    },
    iconContainer:{
        alignContent:"flex-end", 
        justifyContent: "center"
    },

    middle: {
        padding: 15,
        borderRadius: 30,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        
    }
})
