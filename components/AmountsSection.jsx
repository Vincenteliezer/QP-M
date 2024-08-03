import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { UserCardDetails } from '../hooks/useCardDetails';

const AmountsSection = () => {
    const { cardDetails } = UserCardDetails();
    return (
        <View style={styles.base}>
            <Card style={styles.card} mode='contained'>
                <Text variant='titleSmall' style={styles.text}>Total Balance</Text>
                <Text variant='titleLarge'>3287934</Text>
            </Card>
            <Card style={styles.card} mode='contained'>
                <Text variant='titleSmall' style={styles.text}>Total Balance</Text>
                <Text variant='titleLarge'>{cardDetails?.balance ? cardDetails?.balance : "N/A"}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        padding: 20,
        flexDirection: "row",
        gap: 10
    },
    card: {
        padding: 20,
        flex: 1,
    },
    text: {
        color: "gray"
    }
})

export default AmountsSection;
