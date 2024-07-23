import React from 'react';
import { StyleSheet, View } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
