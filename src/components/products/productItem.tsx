import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../models/data/productsState'

const ProductItem: React.FC<Product> = ({ product }) => {
    return (
        <View>
            <Text>ProductItem</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({})