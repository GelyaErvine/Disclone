import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import Account from "../../drawer/account";
import ContentSocial from "../../drawer/contentsocial";
import DataPrivacy from "../../drawer/familycenter";

const Drawer = createDrawerNavigator();

export default function Settings() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Content & Social" component={ContentSocial} />
      <Drawer.Screen name="Data & Privacy" component={DataPrivacy} />
      <Drawer.Screen name="Family Center" component={FamilyCenter} />
    </Drawer.Navigator>
  );
}
