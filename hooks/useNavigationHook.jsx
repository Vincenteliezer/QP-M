import { useNavigation } from "@react-navigation/native"
export const useNavigationHook = () => {
    const navigation = useNavigation();
    return {
        navigation,
    }
}