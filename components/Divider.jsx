import React from 'react'
import { View, Text } from 'react-native'

export const Divider = ({height, opacity}) => {
  return (
    <View style={{marginTop: 10, marginBottom: 10 }}>
        <View style={{ 
          height: height ? height : 1, 
          backgroundColor: '#e0e0e0' , 
          opacity: opacity ? opacity : 1,
          borderRadius: 100,
          }} />
    </View>
  )
}
