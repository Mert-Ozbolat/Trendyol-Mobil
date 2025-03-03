import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { Box } from 'iconsax-react-native';

const Discount: React.FC = () => {
    return (
        <View style={styles.container}>
            <Box size="22" color={Colors.GREEN} />
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
        backgroundColor: '#f0f8ff',
        margin: 10,
        paddingVertical: 5,
        borderRadius: 6
    },
    text: {
        fontSize: 12,
        marginTop: 5,
    },
});