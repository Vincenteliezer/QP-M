import { createContext, useEffect, useState } from "react";
import axios from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
const device_name = "mobile_app";
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadToken = async () => {
            setIsLoading(true)
            try {
                const storedToken = await AsyncStorage.getItem("Bearer");
                if (storedToken) {
                    setUser(JSON.parse(storedToken));
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                }
            } catch (error) {
                setError(error);
                setIsLoading(false)
            }
        }
        loadToken();
    }, []);


    const login = async (email, password) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${BASE_URL}/api/v1/login_mobile_app`, {
                email,
                password,
                device_name,
            })

            if (response.data.Bearer) {
                const token = response.data.Bearer;
                setUser(token);
                AsyncStorage.setItem("Bearer", JSON.stringify(token))
                setIsLoading(false)
                console.log("user added successfully", token);
            } else {
                setError(response.data.Bearer)
                setIsLoading(false)
                console.log("an error occurred", response.data.Error);

            }
        } catch (error) {
            setError(error)
            setIsLoading(false)
            console.log("generic error", error);
        }
    }

    const register = async (name, email, phone, password, password_confirmation) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${BASE_URL}/api/register_device`, {
                name,
                email,
                phone,
                password,
                password_confirmation,
                device_name
            });

            if (response.data.Bearer) {
                const token = response.data.Bearer;
                setUser(token);
                AsyncStorage.setItem("Bearer", JSON.stringify(token))
                setIsLoading(false)
            } else {
                setError(response.data.Bearer)
                setIsLoading(false)
            }

        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    };


    const logout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem("Bearer")
            setUser(null)
            setIsLoading(false);
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }
    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                login,
                register,
                isLoading,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}