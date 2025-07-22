import { store } from "@/redux/store";
import { Text, View } from "react-native";
import { Provider } from 'react-redux'

export default function Index() {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </Provider>
  );
}
