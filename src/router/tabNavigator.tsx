import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import { TABNAVIGATOR } from '../utils/routes';
import { Colors } from './../theme/colors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();


const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.GRAY,
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <TabIcon />
                    )
                }
            }}
        >
            <Tab.Screen name={TABNAVIGATOR.HOME} component={Home} />
            <Tab.Screen name={TABNAVIGATOR.SEARCH} component={Search} />
            <Tab.Screen name={TABNAVIGATOR.FAVORITES} component={Favorites} />
            <Tab.Screen name={TABNAVIGATOR.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigator