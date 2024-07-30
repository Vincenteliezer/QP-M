import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';

const OwnerCard = ({ user, url }) => {

    console.log("token", user);
    const { data, error } = useQuery({
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

    console.log("card details", data);

    console.log("card error", error);
    return (
        <View style={styles.base}>
            <Card style={styles.card}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Chip icon="cash">Total balance</Chip>
                    <Text variant='displaySmall'>KES {data?.balance}</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Chip icon="cash">Card number</Chip>

                    <Text variant='titleMedium'>{data?.card_number}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Chip icon="account">Card holder</Chip>
                    <Text variant='titleMedium'>{data?.card_holder}</Text>
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
        height: 200,
        padding: 20,
        justifyContent: "center",
        gap: 8
    }
})

export default OwnerCard;
