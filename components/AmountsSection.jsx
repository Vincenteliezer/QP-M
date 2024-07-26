import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const AmountsSection = () => {
    return (
        <View style={styles.base}>
            <Card style={styles.card}>
                <Text variant='titleSmall' style={styles.text}>Total Balance</Text>
                <Text variant='titleLarge'>3287934</Text>
            </Card>
            <Card style={styles.card}>
                <Text variant='titleSmall' style={styles.text}>Total Balance</Text>
                <Text variant='titleLarge'>3287934</Text>
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
