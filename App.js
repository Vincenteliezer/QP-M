import { PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';
import theme from './constants/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}
