import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
    const { logout, isLoading } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.base}>
            <Button icon="logout" mode="contained" onPress={logout} loading={isLoading}>
                Logout
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        padding: 20
    }
})

export default HomeScreen;
