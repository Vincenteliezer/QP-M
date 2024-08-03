import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';


const Navigation = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            {user ? (
                <RootStack />
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    );
}

export default Navigation;
