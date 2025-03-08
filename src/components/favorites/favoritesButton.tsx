import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Heart } from 'iconsax-react-native'
import { Colors } from '../../theme/colors'
import { ProductItemProps } from '../../models/ui/productItemProps'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const FavoritesButton: React.FC<ProductItemProps> = ({ product }) => {

    const { isLogin } = useSelector((state: RootState) => state.auth)

    const checklogin = () => {
        if (!isLogin) {
            Alert.alert('Please login for add to favorites')
        }
    }


    return (
        <TouchableOpacity
            onPress={checklogin}
            style={styles.container}>
            {
                product.isFavorite ? <Heart size={22} color={Colors.BLACK} variant="Bold" />
                    : <Heart size={22} color={Colors.BLACK} />
            }
        </TouchableOpacity>
    )
}

export default FavoritesButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 10,
        top: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
})