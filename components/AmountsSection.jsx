import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { UserCardDetails } from '../hooks/useCardDetails';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useNavigationHook } from '../hooks/useNavigationHook';

const AmountsSection = () => {
    const { cardDetails } = UserCardDetails();
    const balance = cardDetails?.balance;
    const formattedBalance = Number(balance).toLocaleString();
    const { navigation} = useNavigationHook();
    
    return (
        <View style={styles.base}>
            <Card style={styles.card} mode='contained'>
                <View style={styles.textWrapper}>
                    <Text variant='titleSmall' style={styles.text}>Total Balance</Text>
                    <Text variant='titleLarge'>{formattedBalance ? formattedBalance : "N/A"}</Text>
                </View>
            </Card>
            
            <Card style={styles.card} mode='contained' onPress={() => navigation.navigate('Scan')}>
                <View style={styles.textWrapper}>
                    <Text variant='titleSmall' style={styles.text}>Scan to pay</Text>
                    <AntDesign name="scan1" size={24} color="black" />
                </View>
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
    },
    textWrapper: {
        gap: 8
    }
})

export default AmountsSection;
