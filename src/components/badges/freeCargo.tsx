import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { Box } from 'iconsax-react-native';

const FreeCargo: React.FC = () => {
    return (
        <View style={styles.container}>
            <Box size="22" color={Colors.GRAY} />
            <Text style={styles.text}>Kargo Bedava</Text>
        </View>
    );
};
export default FreeCargo;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        backgroundColor: '#f0f8ff',
        marginVertical: 10,
        paddingVertical: 5,
        borderRadius: 10
    },
    text: {
        fontSize: 12,
        marginTop: 5,
    },
});