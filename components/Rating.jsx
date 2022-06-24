import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const Rating = ({value}) => {
  return (
    <View style={styles.container}>
        {[...Array(value)].map((_, i) => (
            <Ionicons
                key={i}
                name="triangle" 
                size={30} 
                color={'#e2b673'} 
            />
        ))}

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        flex: 1
    }
})