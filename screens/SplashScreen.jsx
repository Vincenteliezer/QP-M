import { SafeAreaView } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

export default function SplashScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="small">SplashScreen</ActivityIndicator>
        </SafeAreaView>
    )
}