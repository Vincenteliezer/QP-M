import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Chip, Text } from 'react-native-paper';

const OwnerCard = ({ user, url }) => {
    const navigation = useNavigation();

    const { data, error, isLoading } = useQuery({
        queryKey: ['UserCardDetails'],
        queryFn: async () => {
            const response = await axios.post(`${url}/api/v1/card-details`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user}`
                },

            })
            return response.data
        }
    })

    if (isLoading) {
        return <ActivityIndicator size="small" />
    }
    return (
        <View style={styles.base}>
            <Card style={styles.card} onPress={() => navigation.navigate('Card')}>
                <View style={{ justifyContent: "space-between", height: 160 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <Text
                                variant='titleMedium'
                                style={styles.textLabel}>Card number</Text>

                            <Text variant='titleMedium' style={styles.textTitle}>{data?.card_number}</Text>
                        </View>
                        <Text variant='headlineLarge' style={styles.textTitle}>QUEPAY</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View
                            style={{
                                flexDirection: "column",
                            }}>
                            <Text
                                variant='titleMedium'
                                style={styles.textLabel}>Card holder</Text>
                            <Text variant='headlineSmall' style={styles.textTitle}>{data?.card_holder}</Text>
                        </View>

                        <View>
                            <Chip style={{ backgroundColor: "green" }}>
                                <Text style={{ color: "white" }}>{data?.status}</Text>
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
        color: "white"
    },
    textLabel: {
        color: 'gray'
    }
})

export default OwnerCard;