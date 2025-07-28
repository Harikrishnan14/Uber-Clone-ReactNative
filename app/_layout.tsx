import { Stack } from "expo-router";
import './globals.css'
import { Provider } from 'react-redux';
import { store } from "@/redux/store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from "react-native";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack screenOptions={{ headerShown: false }} />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider >
  );
}
