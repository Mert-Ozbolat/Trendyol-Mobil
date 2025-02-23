import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';


const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Tab' component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator