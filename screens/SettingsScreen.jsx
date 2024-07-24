import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, List, MD3Colors, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
    const { logout, isLoading } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.container}>
                <Button
                    uppercase
                    icon="logout"
                    loading={isLoading}
                    mode="contained" onPress={logout}>
                    Logout
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        padding: 20
    }
})

export default SettingsScreen;
