import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { InputProps } from '../../models/ui/inputProps'
import { Colors } from '../../theme/colors'

const Input: React.FC<InputProps> = (props) => {

    const { title } = props

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18 }}>{title}</Text>
            <TextInput {...props} style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    }
})