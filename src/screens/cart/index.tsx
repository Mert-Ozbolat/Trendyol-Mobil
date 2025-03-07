import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../../components/cart/cartItem';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import { Colors } from '../../theme/colors';
import { height, width } from '../../utils/constants';

const Cart: React.FC = () => {
    const { cart } = useSelector((state: RootState) => state.cart);

    return (
        <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
            <View style={defaultScreenStyle.container}>
                <FlatList data={cart} renderItem={({ item }) => <CartItem product={item} />} />
            </View>
            <View style={styles.priceContainer}>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text style={styles.price}>0TL</Text>
                    <Text style={styles.info}>Kargo Bedava</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Button title='Sepete Onayla' onPress={() => dispatch(addCart(product))} />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Cart;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: width,
        height: height * 0.3,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 16,
    },
    category: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.PRIMARY,
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    priceContainer: {
        height: height * 0.1,
        borderTopWidth: 0.5,
        borderColor: Colors.GRAY,
        flexDirection: 'row',
    },
    info: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.GREEN,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.PRIMARY,
    },
});