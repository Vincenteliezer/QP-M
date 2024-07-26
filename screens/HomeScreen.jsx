import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import TopUserBar from '../components/TopUserBar';
import AmountsSection from '../components/AmountsSection';
import Card from '../components/Card';
import OwnerCard from '../components/Card';

const HomeScreen = () => {
    const { user } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.base}>
            <TopUserBar user={user} />
            <AmountsSection />
            <OwnerCard />
            <View style={styles.statementTxt}>
                <Text variant='titleLarge'>Statements history</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: "white"
    },
    topView: {

    },
    statementTxt: {
        padding: 20
    }

})

export default HomeScreen;
