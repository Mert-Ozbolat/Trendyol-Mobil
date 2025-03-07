import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartItemProps } from '../../models/ui/cartItemProps'
import { height, width } from '../../utils/constants'
import { Colors } from '../../theme/colors'
import Delivery from '../badges/delivery'
import FreeCargo from '../badges/freeCargo'
import Discount from '../badges/discount'
import { useNavigation } from '@react-navigation/native'
import { PRODUCTSNAVIGATOR } from '../../utils/routes'
import Counter from './counter'

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSDETAIL, { productId: product.id })} style={styles.container}>

            <View style={{
                justifyContent: "center", alignItems: "center",

            }}>
                <Image source={{ uri: product.image }} style={styles.image} />

            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View>
                    <Text style={styles.title}>{product?.title}</Text>
                </View>

                <View style={{ flexDirection: "row", marginVertical: 10 }} >
                    <Delivery />
                    <FreeCargo />
                    <Discount />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                    <View>
                        <Counter quantity={product.quantity} />
                    </View>


                    <View>
                        <Text style={styles.price}>{product?.price} TL</Text>
                    </View>

                </View>
            </View>
        </Pressable >
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 0.5,
        borderColor: Colors.GRAY,
        paddingVertical: 10
    },
    image: {
        width: width * 0.20, height: height * 0.10, resizeMode: "contain", alignSelf: "center"
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
        color: Colors.PRIMARY
    },
    quantity: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
        color: Colors.PRIMARY
    },
    title: {
        fontSize: 16,
        fontWeight: "600"
    },

})