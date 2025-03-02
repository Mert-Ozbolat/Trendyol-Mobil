import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../store/actions/productsActions'
import { RootState } from '../../store'
import { height, width } from '../../utils/constants'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import { Colors } from '../../theme/colors'

const ProductDetail: React.FC = ({ route }) => {

    const { productId } = route.params
    const dispatch = useDispatch()

    const { product } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getProductDetail({ id: productId }))
    }, [])

    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View style={defaultScreenStyle.container}>
                <ScrollView>
                    <Image
                        source={{ uri: product.image }}
                        style={{
                            width: width,
                            height: height * 0.3,
                            resizeMode: 'contain',
                            marginVertical: 20
                        }}
                    />
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },
    description: {
        fontSize: 16
    },
    category: {
        fontSize: 18,
        color: Colors.PRIMARY,
        marginVertical: 10,
        fontWeight: '600',
        textDecorationLine: 'underline'
    }
})