import React from 'react';
import { Snackbar } from 'react-native-paper';
const SnackAlert = ({ visible, onDismiss, action, error}) => {
    return (
        <Snackbar
            style={{ backgroundColor: "red" }}
            wrapperStyle={{ alignSelf: "center" }}
            visible={visible}
            onDismiss={onDismiss}
            action={action}>
            {`Warning! ${error}!`}
        </Snackbar>
    );
}

export default SnackAlert;
