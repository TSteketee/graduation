import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { data } from '../../assets/data/EnvironmentalData'
import ProgressCircle from 'react-native-progress-circle'
import { Background } from '../Background'


const blindsRatio = 3225 / 3723
const dimRatio =  3906 / 3906

export const VisualIcon = ({size, data}) => {
    return (
        <View>
            <View>
                <ProgressCircle
                    percent={data.light ? data.light : 0}
                    radius={size}
                    borderWidth={5}
                    color="#e2b673"
                    shadowColor="rgba(32,61,60,1)"
                    bgColor="rgb(32,61,60)"
                    children={
                        <>
                            <Background />
                            <Text style={styles.title}>{Math.round(data.light)}</Text>
                            <Text style={styles.text}>Lux</Text>
                        </>
                    }
                />

            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
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
