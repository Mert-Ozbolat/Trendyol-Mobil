import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import WidgetHeader from '../components/widgets/widgetHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellerProducts } from '../store/actions/productsActions';
import type { RootState } from '../store/index';
import { FlatList } from 'react-native';
import ProductItem from '../components/products/productItem';

const BestSeller: React.FC = () => {
    const dispatch = useDispatch();

    const bestSellerProducts = useSelector(
        (state: RootState) => state.products.bestSellerProducts,
    );
    useEffect(() => {
        dispatch(getBestSellerProducts());
    }, []);

    return (
        <View>
            <WidgetHeader title="Çok Satan Ürünler" />
            <FlatList data={bestSellerProducts} renderItem={({ item }) => <ProductItem product={item} />} />
        </View>
    );
};

export default BestSeller;

const styles = StyleSheet.create({});