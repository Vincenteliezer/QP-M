import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import TopUserBar from '../components/TopUserBar';

const HomeScreen = () => {
    const { logout, isLoading, user } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.topView}>
                <TopUserBar user={user} />
            </View>
            <View style={styles.bottomView}>

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
        flex: 1,
        backgroundColor: "gray"
    },
    bottomView: {
        flex: 1
    }
})

export default HomeScreen;
