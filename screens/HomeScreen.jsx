import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import TopUserBar from '../components/TopUserBar';
import AmountsSection from '../components/AmountsSection';
import OwnerCard from '../components/Card';
import GetStatements from '../components/api/GetStatements';

const HomeScreen = ({ navigation }) => {
    const { user, BASE_URL } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.base}>
            <TopUserBar user={user} />
            <AmountsSection />
            <OwnerCard user={user} url={BASE_URL} />
            <View style={styles.statementTxt}>
                <Text variant='titleLarge'>Statements history</Text>
                <Button mode='contained-tonal' icon='chevron-right' onPress={() => navigation.navigate("Statements")}>
                    More
                </Button>
            </View>
            <GetStatements user={user} url={BASE_URL} />
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
        paddingHorizontal: 20,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }

})

export default HomeScreen;
