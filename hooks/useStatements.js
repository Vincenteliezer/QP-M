import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
            return response.data
        }
    })

  
    return {
        statements,
        error,
        isLoading
    }
}