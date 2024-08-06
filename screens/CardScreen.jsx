import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import { List, TextInput } from 'react-native-paper';
import NativeDialog from '../components/ui/NativeDialog';
import { AuthContext } from '../context/AuthContext';
import LoadCard from '../components/api/LoadCard';
import { UserCardDetails } from '../hooks/useCardDetails';

const CardScreen = () => {
    const { cardDetails } = UserCardDetails();

    const [visibleDialog, setVisibleDialog] = useState(false);
    const { isLoading } = useContext(AuthContext);
    const showDialog = () => setVisibleDialog(true);
    const hideDialog = () => setVisibleDialog(false);

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <NativeDialog visible={visibleDialog} onDismiss={hideDialog}>
                    <LoadCard />
                </NativeDialog>

                <View style={styles.cardWrapper}>
                    <TextInput
                        label="Card Balance"
                        value={cardDetails.balance}
                        mode='outlined'
                    />
                    <TextInput
                        label="Card Holder"
                        value={cardDetails.card_holder}
                        mode='outlined'
                    />
                    <TextInput
                        label="Card Number"
                        value={cardDetails.card_number}
                        mode='outlined'
                    />
                    <TextInput
                        label="Card Status"
                        value={cardDetails.status}
                        mode='outlined'
                    />
                </View>

                <View style={styles.section}>
                    <List.Section>
                        <List.Subheader>Actions</List.Subheader>
                        <List.Item
                            onPress={showDialog}
                            title="Load card"
                            left={() => <List.Icon icon="credit-card-plus-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}

                        />
                        <List.Item
                            title="Suspend card"
                            left={() => <List.Icon icon="credit-card-off-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}
                        />
                        <List.Item
                            title="Delete card"
                            left={() => <List.Icon icon="credit-card-minus-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}
                        />
                    </List.Section>
                </View>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        padding: 20,
        backgroundColor: "white",
        margin: 20,
        borderRadius: 10,
        gap: 16
    },
    section: {
        backgroundColor: "white",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10
    }
})

export default CardScreen;
