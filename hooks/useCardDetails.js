import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from '../lib/axios'
import { AuthContext } from '../context/AuthContext'
import { ActivityIndicator, Text } from 'react-native-paper'

export const UserCardDetails = () => {
    const { user, BASE_URL } = useContext(AuthContext);

    const { data: cardDetails, error, isLoading } = useQuery({
        queryKey: ['UserCardDetails'],
        queryFn: async () => {
            const response = await axios.post(`${BASE_URL}/api/v1/card-details`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user}`
                },

            })
            return response.data
        }
    })

    if (isLoading) {
        return <ActivityIndicator size="small" />
    }

    if (error) {
        return <Text>A problem occurred!</Text>

    }
    return {
        cardDetails,
    }
}