import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.cardWrapper}>
                <TextInput
                    style={styles.input}
                    label="Email"
                    mode='outlined'
                />

                <TextInput
                    style={styles.input}
                    label="Password"
                    mode='outlined'
                    secureTextEntry
                />

                <TouchableOpacity>
                    <Button
                        mode="contained"
                        uppercase
                        style={{
                            borderRadius: 10,
                            padding: 8,
                        }}
                    >
                        Login
                    </Button>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        padding: 20
    },
    cardWrapper: {
        padding: 8,
    },
    input: {
        marginBottom: 20
    }

})

export default LoginScreen;
