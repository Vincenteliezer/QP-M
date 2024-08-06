import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Chip, List, Text } from 'react-native-paper';
import { useStatements } from '../../hooks/useStatements';

const GetStatements = () => {
    const { statements, error, isLoading } = useStatements();

    if (isLoading) {
        return <ActivityIndicator size="small" />
    }

    if (error) {
        return (
            <View style={{padding: 20}}>
                <Chip mode='flat' >Error fetching statements</Chip>
            </View>
        )

    }
    
    const topFive = statements.data;

    return (
        <FlatList
            data={topFive ? topFive.slice(0, 5) : []}
            renderItem={({ item }) => (
                <Card style={{ marginHorizontal: 20, marginVertical: 8 }} mode='contained'>
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


export default GetStatements;
