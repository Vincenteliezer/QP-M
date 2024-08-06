import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useUser } from '../hooks/useUser';
import { useNavigation } from '@react-navigation/native';

export default function TopUserBar() {
    const { userDetails, isLoading, error } = useUser();
    const navigation = useNavigation();

    if (error) {
        return <Text variant="titleMedium">{`No user ${error}`}</Text>
    }
    

    return (
        <View style={styles.base}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Avatar.Icon size={50} icon="account" />
                </TouchableOpacity>
                <View style={{}}>
                    <Text variant="titleLarge">Welcome</Text>
                    <Text variant="titleSmall">{isLoading ? "Loading..." : userDetails?.name}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", gap: 26 }}>
                <TouchableOpacity>
                    <AntDesign name="scan1" size={26} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={26} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    base: {
        backgroundColor: "white",
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})