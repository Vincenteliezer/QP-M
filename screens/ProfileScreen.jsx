import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import { Avatar, Button, Divider, Text, TextInput } from 'react-native-paper';
import { useUser } from '../hooks/useUser';

const ProfileScreen = () => {
    const { userDetails } = useUser();
    return (
        <Container>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.avatarWrapper}>
                    <Avatar.Icon size={100} icon="account" />
                    <View style={styles.textWrapper}>
                        <Text variant='titleLarge'>{userDetails?.name}</Text>
                        <Text variant='titleSmall'>{userDetails?.email}</Text>
                    </View>
                </View>

                <View style={styles.moreDetails}>
                    <TextInput
                        label="Name"
                        mode='outlined'
                        value={userDetails?.name}
                    />
                    <TextInput
                        label="Email"
                        mode='outlined'
                        value={userDetails?.email}
                    />
                    <TextInput
                        label="Phone"
                        mode='outlined'
                        value={userDetails?.phone}
                    />
                    <Button
                        uppercase
                        style={styles.buttonUpdate}
                        mode='contained'
                        contentStyle={{
                            height: 50
                        }}
                    >
                        Update
                    </Button>
                </View>
            </ScrollView>
        </Container>
    );
}


const styles = StyleSheet.create({
    avatarWrapper: {
        backgroundColor: "white",
        marginTop: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textWrapper: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    moreDetails: {
        marginTop: 10,
        backgroundColor: "white",
        padding: 20,
        gap: 20
    },
    buttonUpdate: {
        borderRadius: 6
    }
})
export default ProfileScreen;
