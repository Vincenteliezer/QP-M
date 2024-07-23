import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import { AuthContext } from '../context/AuthContext';


const Navigation = () => {
    const { user } = useContext(AuthContext);

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
