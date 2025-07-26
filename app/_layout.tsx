import { Stack } from "expo-router";
import './globals.css'
import { Provider } from 'react-redux';
import { store } from "@/redux/store";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </Provider>
  );
}
