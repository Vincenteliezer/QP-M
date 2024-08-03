import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';
import { UserCardDetails } from '../hooks/useCardDetails';

const OwnerCard = () => {
    const navigation = useNavigation();

    const { cardDetails } = UserCardDetails();
    return (
        <View style={styles.base}>
            <Card style={styles.card} onPress={() => navigation.navigate('Card')}>
                <View style={{ justifyContent: "space-between", height: 160 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{flex: 1}}>
                            <Text
                                variant='titleMedium'
                                style={styles.textLabel}>Card number</Text>

                            <Text variant='titleMedium' style={styles.textTitle}>{cardDetails?.card_number ? cardDetails?.card_number : "No card linked to your account"}</Text>
                        </View>
                        <Text variant='headlineLarge' style={styles.textTitle}>QUEPAY</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                            }}>
                            <Text
                                variant='titleMedium'
                                style={styles.textLabel}>Card holder</Text>
                            <Text variant='headlineSmall' style={styles.textTitle}>{cardDetails?.card_holder ? cardDetails?.card_holder : "N/A"}</Text>
                        </View>

                        <View>
                            <Chip style={{ backgroundColor: "green" }}>
                                <Text style={{ color: "white" }}>{cardDetails?.status ? cardDetails?.status : "Not available"}</Text>
                            </Chip>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 20
    },
    card: {
        padding: 20,
        backgroundColor: "black",
    },
    textTitle: {
        color: "white",
    },
    textLabel: {
        color: 'gray'
    }
})

export default OwnerCard;