import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getUserInfo } from '../../store/actions/userAction'
import Avatar from '../../components/user/avatar'

const Profile = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(getUserInfo({ id: 1 }))
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Avatar />
            <Text>{ }</Text>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})