import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthLayout = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <AuthLayout.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthLayout.Screen name='Login' component={LoginScreen} />
            <AuthLayout.Screen name='Register' component={RegisterScreen} />
        </AuthLayout.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AuthStack;
