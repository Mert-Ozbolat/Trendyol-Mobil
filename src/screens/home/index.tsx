import { SafeAreaView, StyleSheet, View } from 'react-native';
import Categories from '../../widgets/categories';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';

const Home: React.FC = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <View>
                <Categories />
            </View>
        </SafeAreaView>
    );
};

export default Home;
