import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Button, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function TopUserBar({ user }) {

    const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

    const { isPending, isLoading, isFetching, data } = useQuery({
        queryKey: ['UserDetails'],
        queryFn: async () => {
            const response = await axios.post(`${BASE_URL}/api/v1/user-details`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user}`
                },

            })
            return response.data
        }
    })

    return (
        <View style={styles.base}>
            <Avatar.Icon size={50} icon="account" />
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text variant="headlineLarge">Welcome</Text>
                <Text variant="titleLarge">{data?.name}</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={26} color="gray" />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    base: {
        backgroundColor: "white",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})