import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { Send2 } from 'iconsax-react-native';


const Delivery: React.FC = () => {
    return (
        <View style={styles.container}>
            <Send2 size="22" color={Colors.GREEN} />
            <Text style={styles.text}>Hızlı Teslimat</Text>
        </View>
    );
};
export default Delivery;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        backgroundColor: '#BDE8CA',
        margin: 10,
        paddingVertical: 5,
        borderRadius: 6
    },
    text: {
        fontSize: 12,
        marginTop: 5,
    },
});