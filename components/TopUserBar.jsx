import { View, Text, StyleSheet } from 'react-native'

export default function TopUserBar({ user }) {

    return (
        <View style={styles.base}>
            <Text>TopUserBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: "white",
        padding: 20
    }
})