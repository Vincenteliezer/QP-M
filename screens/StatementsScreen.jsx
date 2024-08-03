import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const StatementsScreen = () => {
    const navigation = useNavigation()

 
    return (
        <SafeAreaView style={styles.base}>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1
    }
})

export default StatementsScreen;
