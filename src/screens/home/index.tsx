import { SafeAreaView, StyleSheet, View } from 'react-native';
import Categories from '../../widgets/categories';

const Home: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Categories />
            </View>
        </SafeAreaView>
    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});