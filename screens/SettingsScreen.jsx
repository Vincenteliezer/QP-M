import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Dialog, Divider, List, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import Container from '../components/Container';
import logo from '../assets/images/quePayFinal.png'
import NativeDialog from '../components/ui/NativeDialog';

const SettingsScreen = ({ navigation }) => {
    const { logout, isLoading } = useContext(AuthContext);

    const [visibleDialog, setVisibleDialog] = useState(false);

    const showDialog = () => setVisibleDialog(true);
    const hideDialog = () => setVisibleDialog(false);

    return (
        <Container>
            <NativeDialog visible={visibleDialog} onDismiss={hideDialog}>
                <Dialog.Title>Warning</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">You are signing out from Quepay App and you will be required to sign in again next time!</Text>
                    <Text variant="titleSmall" style={{marginTop: 10}}>Are you sure you want to sign out? </Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>No</Button>
                    <Button loading={isLoading} onPress={logout}>Yes</Button>
                </Dialog.Actions>
            </NativeDialog>
            <View style={styles.quepayBar}>
                <Image source={logo} style={styles.logo} />
                <Text variant='titleSmall'>V.0.2</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <View style={styles.section}>
                    <List.Section>
                        <List.Subheader>General</List.Subheader>
                        <List.Item
                            onPress={() => navigation.navigate('Profile')}
                            title="Profile settings"
                            left={() => <List.Icon icon="account-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}
                        />
                        <List.Item
                            title="Theme settings"
                            left={() => <List.Icon icon="theme-light-dark" />}
                            right={() => <List.Icon icon="chevron-right" />}

                        />
                        <List.Item
                            title="Notifications"
                            left={() => <List.Icon icon="bell-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}

                        />
                    </List.Section>
                    <Divider />

                    <List.Section>
                        <List.Subheader>Data</List.Subheader>
                        <List.Item
                            onPress={() => navigation.navigate('Profile')}
                            title="Terms & Conditions"
                            left={() => <List.Icon icon="file-sign" />}
                            right={() => <List.Icon icon="chevron-right" />}
                        />
                        <List.Item
                            title="Privacy Policy"
                            left={() => <List.Icon icon="text-box-check" />}
                            right={() => <List.Icon icon="chevron-right" />}

                        />
                    </List.Section>
                </View>

                <View style={styles.section}>
                    <List.Section>
                        <List.Subheader>More</List.Subheader>
                        <List.Item
                            onPress={() => navigation.navigate('Profile')}
                            title="About"
                            left={() => <List.Icon icon="information-outline" />}
                            right={() => <List.Icon icon="chevron-right" />}
                        />
                        <List.Item
                            onPress={showDialog}
                            title="Sign out"
                            left={() => <List.Icon icon="logout-variant" />}
                            right={() => <List.Icon icon="chevron-right" />}

                        />
                    </List.Section>
                </View>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        padding: 20
    },
    quepayBar: {
        height: 150,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        elevation: 1,
        zIndex: 50
    },
    logo: {
        height: 50,
        objectFit: "contain"
    },
    section: {
        backgroundColor: "white",
        marginTop: 10,
        padding: 20
    }
})

export default SettingsScreen;
