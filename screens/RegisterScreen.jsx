import React, { useContext } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {

    const { register, isLoading } = useContext(AuthContext);

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
                <Text variant="titleLarge">Hello,</Text>
                <Text variant="headlineLarge">Let's get started!</Text>
            </View>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    password_confirmation: '',
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required("Full name is required!"),
                        email: Yup.string()
                            .email()
                            .required("Email is required!"),
                        phone: Yup.number()
                            .required("Phone is required!"),
                        password: Yup.string()
                            .required("Password is required!"),
                        password_confirmation: Yup.string()
                            .required("Confirm password is required!"),
                    })
                }
                onSubmit={async (values) => {
                    await register(values.name, values.email, values.phone, values.password, values.password_confirmation);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, isValid, values, touched }) => (
                    <View style={styles.cardWrapper}>
                        <TextInput
                            id='name'
                            style={styles.input}
                            label={errors.name ? errors.name : "Full Name"}
                            mode='outlined'
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            error={errors.name && touched.name}
                        />

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
                            id='phone'
                            style={styles.input}
                            label={errors.phone ? errors.phone : "Phone number"}
                            mode='outlined'
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            error={errors.phone && touched.phone}
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

                        <TextInput
                            id='password_confirmation'
                            style={styles.input}
                            label={errors.password_confirmation ? errors.password_confirmation : "Confirm password"}
                            mode='outlined'
                            secureTextEntry
                            value={values.password_confirmation}
                            onChangeText={handleChange('password_confirmation')}
                            onBlur={handleBlur('password_confirmation')}
                            error={errors.password_confirmation && touched.password_confirmation}
                        />

                        <Button
                            onPress={handleSubmit}
                            mode="contained"
                            uppercase
                            loading={isLoading}
                            style={styles.loginBtn}
                            contentStyle={{
                                height: 50,
                            }}
                        >
                            Sign up
                        </Button>
                        <View style={styles.signUpTxtWrapper}>
                            <Text variant="titleMedium">Already registered?</Text>
                            <Button
                                onPress={() => navigation.navigate('Login')}
                                mode="outlined">
                                Login
                            </Button>
                        </View>
                    </View>
                )}

            </Formik>

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

export default RegisterScreen;
