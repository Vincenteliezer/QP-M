import { PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';
import theme from './constants/theme';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </AuthProvider>
  );
}
