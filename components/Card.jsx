import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

const OwnerCard = () => {
    return (
        <View style={styles.base}>
            <Card style={styles.card}>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 20
    },
    card: {
        height: 200
    }
})

export default OwnerCard;
