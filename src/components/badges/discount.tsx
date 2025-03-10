import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { DiscountShape } from 'iconsax-react-native';


const Discount: React.FC = () => {
    return (
        <View style={styles.container}>
            <DiscountShape size="22" color={Colors.PRIMARY} />
            <Text style={styles.text}>2. Ürün İndirim</Text>
        </View>
    );
};
export default Discount;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        backgroundColor: '#ffe3e3',
        margin: 10,
        paddingVertical: 5,
        borderRadius: 6
    },
    text: {
        fontSize: 12,
        marginTop: 5,
    },
});