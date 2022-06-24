import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { BigBoxList } from '../components/BigBox'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'


export const ListView = ({listData}) => {

    return (
        <View style={styles.container}>
                <Background />
                {/* <Logo />    */}
                <BigBoxList listData={listData}/>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})