import { store } from "@/redux/store";
import HomeScreen from "@/screens/HomeScreen";
import { Text, View } from "react-native";
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}
