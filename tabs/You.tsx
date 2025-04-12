import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YouHome from "../stack/you/home";
import YouNote from "../stack/you/note";
import YouStatus from "../stack/you/status";
import Settings from "../stack/you/settings";

const Stack = createNativeStackNavigator();

export default function You() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={YouHome} />
      <Stack.Screen name="Note" component={YouNote} />
      <Stack.Screen name="Status" component={YouStatus} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
