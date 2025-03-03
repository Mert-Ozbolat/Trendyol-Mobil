import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Heart } from 'iconsax-react-native'
import { Colors } from '../../theme/colors'

const FavoritesButton: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Heart size={20} color={Colors.BLACK} />
        </TouchableOpacity>
    )
}

export default FavoritesButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
})