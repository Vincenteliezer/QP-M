import { PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';
import theme from './constants/theme';
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
