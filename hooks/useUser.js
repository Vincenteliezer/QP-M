import { useQuery } from "@tanstack/react-query"
import axios from "../lib/axios"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useUser = () => {
    const { user, BASE_URL } = useContext(AuthContext);

    const { data: userDetails, isLoading, error } = useQuery({
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

    return {
        userDetails,
        isLoading,
        error
    }
}