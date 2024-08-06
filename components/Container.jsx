import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }) => {
    return (
        <SafeAreaView style={styles.base}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1
    }
})

export default Container;
