import React, { useState } from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ScaleInput = ({setComfort}) => {
    const [scale, setScale] = useState(2)
    
    const handleChange = (itemId) => {
        setScale(itemId)
        setComfort((itemId-2).toString())
    }

    const InputButton = ({itemId}) => {
        let col = itemId === scale ? '#e2b673' : '#fff'
        // if (itemId)

        // if (itemId <= 2 && itemId > scale) {
        //     col = '#e2b673'
        // }

        // if (itemId >= 2 && itemId < scale) {
        //     col = '#e2b673'
        // }

        return (
            <TouchableOpacity onPress={() => handleChange(itemId)} style={{flexDirection:'column', flexWrap:'wrap'}}>
                <Ionicons
                    name="triangle" 
                    size={40} 
                    color={col} 
                />
                {/* <Text 
                    style={{
                        fontSize: 20,
                        color: col,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }} 
                >{itemId-2}</Text> */}
            </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.spanContainer}>
            {[...Array(5)].map((_, i) => (
                    <InputButton style={styles.span} key={i} itemId = {i}/>
            ))}
        </View>
        <View style={{display:"flex", flexDirection:'row'}}>
            <View style={{flex:1,}}>
                <Text style={styles.scaleInputTextLeft}>Very</Text>
                <Text style={styles.scaleInputTextLeft}>uncomfortable</Text>
            </View>            
            <View style={{flex:1}}>
                <Text style={styles.scaleInputTextRight}>Very</Text>
                <Text style={styles.scaleInputTextRight}>comfortable</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    spanContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: windowWidth*0.7
        },
    span: {
        flex: 1,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    scaleInputTextRight:{
        marginLeft:"auto", 
        fontSize:14, 
        color:"#fff", 
        fontWeight:"bold", 
        textAlign:"right"
    },
    scaleInputTextLeft:{
        marginRight:"auto", 
        fontSize:14, 
        color:"#fff", 
        fontWeight:"bold", 
        textAlign:"right"
    }
})