import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.logoWrapper}>
                <Image
                    resizeMode='cover'
                    style={styles.logo}
                    source={require('../assets/icons/quepayLogoName.png')}
                />
            </View>
            <View style={styles.welcomeTxtWrapper}>
                <Text variant="titleLarge">Welcome back!</Text>
                <Text variant="headlineLarge">Please, Log In.</Text>
            </View>
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

                <Button
                    onPress={() => console.log("pressed")}
                    mode="contained"
                    uppercase
                    style={styles.loginBtn}
                    contentStyle={{
                        height: 50,
                    }}
                >
                    Login
                </Button>
                <View style={styles.signUpTxtWrapper}>
                    <Text variant="titleMedium">Don't have an account?</Text>
                    <Button
                        onPress={() => navigation.navigate('Register')}
                        mode="outlined">
                        Sign Up!
                    </Button>
                </View>
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
        marginTop: 20
    },
    input: {
        marginBottom: 20
    },
    welcomeTxtWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    logoWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 60,
        objectFit: "contain"
    },
    signUpTxtWrapper: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    loginBtn: {
        borderRadius: 10,
    }
})

export default LoginScreen;
