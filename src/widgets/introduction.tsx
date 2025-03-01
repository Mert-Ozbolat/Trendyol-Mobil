import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { height, width } from '../utils/constants'

const Introduction = () => {
    return (
        <Pressable style={styles.container}>
            <Image style={{ width: width, height: height * 0.2, resizeMode: 'contain' }} source={require('../assets/images/Introduction.webp')} />
        </Pressable>
    )
}

export default Introduction

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})