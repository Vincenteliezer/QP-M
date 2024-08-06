import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useStatements } from '../hooks/useStatements';
import { ActivityIndicator, List, Text } from 'react-native-paper';

const StatementsScreen = () => {
    const { statements, error, isLoading } = useStatements();


    if (isLoading) {
        return <ActivityIndicator size="small" />
    }

    if (error) {
        return <Text>A problem occurred!</Text>

    }
    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.balanceView}>
                <Text variant='headlineMedium'>Balance</Text>
                <Text variant='titleMedium'>{`${statements.balance} /=`}</Text>
            </View>
            <FlashList
                contentContainerStyle={{ padding: 8 }}
                data={statements.data}
                key={statements.data.id}
                renderItem={({ item }) => (
                    <List.Accordion
                        style={{ backgroundColor: "white", marginVertical: 3 }}
                        title={item.purpose === "credit" ? `Amount paid: ${item.TransAmount} KES` : `-${item.TransAmount}.00 KES`}
                        left={props => <List.Icon {...props} icon="cash" />}
                        description={`Paid to: ${item.shop_name}`}
                    >
                        <List.Item title={`Phone: ${item.phone}`} />
                        <List.Item title={`Time: ${new Date(item.created_at).toLocaleTimeString()}`} />
                    </List.Accordion>
                )}
                estimatedItemSize={500}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    balanceView: {
        height: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2
    }
})

export default StatementsScreen;
