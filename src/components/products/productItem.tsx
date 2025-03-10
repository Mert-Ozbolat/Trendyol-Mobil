import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductItemProps } from '../../models/ui/productItemProps'
import { height, width } from '../../utils/constants'
import { Colors } from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { PRODUCTSNAVIGATOR } from '../../utils/routes'
import FavoritesButton from '../favorites/favoritesButton'
import Rate from './rate'
import FreeCargo from '../badges/freeCargo'
import Discount from '../badges/discount'
import Delivery from '../badges/delivery'

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    const navigation = useNavigation()

    return (
        <Pressable
            onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSDETAIL, { productId: product.id })}
            style={styles.container}>
            <FavoritesButton product={product} />
            <Image source={{ uri: product.image }} style={{ width: width * 0.25, height: height * 0.15, resizeMode: "contain", alignSelf: "center" }} />
            <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: "bold", marginVertical: 5 }}>{product.title}</Text>
            <Text numberOfLines={2} style={{ fontSize: 14, marginVertical: 5, color: Colors.PRIMARY }}>{product.category}</Text>
            {product.rating && <Rate size='small' rating={product?.rating} />}
            <Text numberOfLines={2} style={{ fontSize: 16, fontWeight: "bold", marginVertical: 5, color: Colors.PRIMARY }}>{product.price} TL</Text>


            <View style={{ flexDirection: 'row' }}>
                <FreeCargo />
                <Discount />
                <Delivery />
            </View>


        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: width * 0.45,
        minHeight: height * 0.28,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.GRAY,
        padding: 5,
        marginHorizontal: 5,
        margin: 5
    }
})