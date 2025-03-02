import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import WidgetHeader from '../components/widgets/widgetHeader'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import ProductItem from '../components/products/productItem';
import { getPopularProducts } from '../store/actions/productsActions';


const PopularProducts: React.FC = () => {

    const dispatch = useDispatch()

    const popularProducts = useSelector(
        (state: RootState) => state.products.popularProducts,
    );

    useEffect(() => {
        dispatch(getPopularProducts());
    }, []);



    return (
        <View>
            <WidgetHeader title="Popüler Ürünler" />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal data={popularProducts}
                renderItem={({ item }) => <ProductItem product={item} />} />
        </View>
    )
}

export default PopularProducts

const styles = StyleSheet.create({})