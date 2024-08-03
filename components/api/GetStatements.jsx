import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

const GetStatements = () => {


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
