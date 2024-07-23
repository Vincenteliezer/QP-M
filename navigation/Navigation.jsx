import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    statusBarColor: "white",
                    statusBarStyle: "dark"
                }}
            >
                <Stack.Screen name="Tabs" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
