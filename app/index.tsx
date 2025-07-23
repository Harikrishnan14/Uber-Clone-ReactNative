import { store } from "@/redux/store";
import HomeScreen from "@/screens/HomeScreen";
import { Text, View } from "react-native";
import { Provider } from 'react-redux'

export default function Index() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
