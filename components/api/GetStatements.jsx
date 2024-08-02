import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import axios from '../../lib/axios';
import { ActivityIndicator, Card, List, MD3Colors, Text } from 'react-native-paper';

const GetStatements = ({ url, user }) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['GetUserStatements'],
        queryFn: async () => {
            const response = await axios.post(`${url}/api/v1/card-usage`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user}`
                },

            })
            return response.data.data
        }
    })

    if (isLoading) {
        return <ActivityIndicator size="small" />
    }
    return (
        <FlatList
            data={data ? data.slice(0, 5) : []}
            renderItem={({ item }) => (
                <Card style={{ marginHorizontal: 20, marginVertical: 8 }} mode='outlined'>
                    <List.Item
                        title={
                            item.purpose == "credit" ? (
                                <Text className="text-base font-bold text-green-500">
                                    +{item.TransAmount}
                                </Text>
                            ) : (
                                <Text className="text-base font-bold text-red-500">
                                    -{item.TransAmount}.00 KES
                                </Text>
                            )
                        }
                        description={item.shop_name}
                        right={() => <Text>{new Date(item.created_at).toLocaleTimeString()}</Text>}
                    />
                </Card>
            )}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({})

export default GetStatements;
