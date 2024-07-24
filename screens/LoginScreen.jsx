import React, { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';
import SnackAlert from '../components/ui/SnackAlert';

const LoginScreen = ({ navigation }) => {
    const { login, isLoading, error, resetError } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    const onDismissSnack = () => {
        setVisible(false);
        resetError();
    };

    useEffect(() => {
        if (error) {
            setVisible(true);
        }
    }, [error]);

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
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                            .email()
                            .required("Email is required!"),
                        password: Yup.string()
                            .required("Password is required!")
                    })
                }
                onSubmit={async (values) => {
                    await login(values.email, values.password)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, isValid, values, touched }) => (
                    <View style={styles.cardWrapper}>
                        <TextInput
                            id='email'
                            style={styles.input}
                            label={errors.email ? errors.email : "Email"}
                            mode='outlined'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email && touched.email}
                        />

                        <TextInput
                            id='password'
                            style={styles.input}
                            label={errors.password ? errors.password : "Password"}
                            mode='outlined'
                            secureTextEntry
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            error={errors.password && touched.password}
                        />

                        <Button
                            loading={isLoading}
                            onPress={handleSubmit}
                            mode="contained"
                            uppercase
                            style={styles.loginBtn}
                            contentStyle={{
                                height: 50,
                            }}
                        >
                            Login
                        </Button>
                    </View>
                )}
            </Formik>
            <View style={styles.signUpTxtWrapper}>
                <Text variant="titleMedium">Don't have an account?</Text>
                <Button
                    onPress={() => navigation.navigate('Register')}
                    mode="outlined">
                    Sign Up!
                </Button>
            </View>


            <SnackAlert error={error} visible={visible} onDismiss={onDismissSnack} />
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
