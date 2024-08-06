import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTabs from './BottomTabs';
import ProfileScreen from '../screens/ProfileScreen';
import CardScreen from '../screens/CardScreen';
import ScanScreen from '../screens/ScanScreen';

const RootLayout = createNativeStackNavigator();

const RootStack = () => {
    return (
        <RootLayout.Navigator>
            <RootLayout.Screen
                options={{
                    headerShown: false,
                    statusBarColor: "white",
                    statusBarStyle: "dark"
                }}
                name='Tabs'
                component={BottomTabs} />
            <RootLayout.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShadowVisible: false,
                    animation: "ios"
                }}
            />
            <RootLayout.Screen
                name='Card'
                options={{
                    headerShadowVisible: false,
                    animation: "ios"
                }}
                component={CardScreen} />

            <RootLayout.Screen
                name='Scan'
                options={{
                    headerShadowVisible: false,
                    animation: "fade_from_bottom"
                }}
                component={ScanScreen} />
        </RootLayout.Navigator>
    );
}

const styles = StyleSheet.create({})

export default RootStack;
