import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, TextInput } from 'react-native-paper';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { UserCardDetails } from '../../hooks/useCardDetails';
import { useUser } from '../../hooks/useUser';
import axios from '../../lib/axios';

const LoadCard = () => {
    const { cardDetails } = UserCardDetails();
    const { userDetails } = useUser();

    return (
        <View>
            <Dialog.Title>Load card</Dialog.Title>
            <View style={{ padding: 20 }}>
                <Formik
                    initialValues={{
                        card_number: cardDetails.card_number,
                        phone: userDetails.phone,
                        amount: ''
                    }}
                    validationSchema={
                        Yup.object({
                            amount: Yup.string()
                                .required("Amount is required!")
                        })
                    }
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            await axios.post(`/api/v1/load-card?${values.card_number}&${values.phone}&${values.amount}`);
                        } catch (error) {
                            console.log("generic error", error);
                            
                        }
                        resetForm();
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, errors, values, touched }) => (
                        <View>
                            <TextInput
                                id='amount'
                                mode='outlined'
                                keyboardType='number-pad'
                                label={errors.amount ? errors.amount : "Amount"}
                                value={values.amount}
                                onChangeText={handleChange('amount')}
                                onBlur={handleBlur('amount')}
                                error={errors.amount && touched.amount}
                            />

                            <Button
                                mode='contained'
                                style={{ borderRadius: 10, marginTop: 20 }}
                                contentStyle={{ height: 50 }}
                                uppercase={true}
                                onPress={handleSubmit}
                            >
                                Load
                            </Button>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default LoadCard;
