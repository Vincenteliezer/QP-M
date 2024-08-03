import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActivityIndicator, Text } from "react-native-paper";

export const useStatements = () => {
    const { user, BASE_URL } = useContext(AuthContext);


    const { data: statements, error, isLoading } = useQuery({
        queryKey: ['GetUserStatements'],
        queryFn: async () => {
            const response = await axios.post(`${BASE_URL}/api/v1/card-usage`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user}`
                },

            })
            return response.data.data
        }
    })

    if (isLoading) {
        return <ActivityIndicator size="small" />
    }

    if (error) {
        return <Text>A problem occurred!</Text>

    }
    return {
        statements
    }
}