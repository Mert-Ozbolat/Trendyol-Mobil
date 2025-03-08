import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Profile = () => {

    const { token } = useSelector((state: RootState) => state.auth)

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16 }}>{token}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})