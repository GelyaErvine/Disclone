import { View } from "react-native";
import {
  Appbar,
  Button,
  Card,
  IconButton,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";
import { styles } from "../../styles/styles";
import { useState } from "react";

export default function YouStatus({ navigation, route }) {
  const [nStatus, setNStatus] = useState();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() =>
              navigation.popTo("Home", {inote: route.params?.inote, istatus: route.params?.istatus })
            }
          />
          <Appbar.Content title="Edit Status" />
          <Appbar.Action
            icon={"floppy"}
            onPress={() => navigation.popTo("Home", {inote: route.params?.inote, istatus: nStatus })}
          />
        </Appbar.Header>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Status</Text>
            <TextInput
              label="Status"
              defaultValue={route.params?.istatus}
              multiline={true}
              onChangeText={(e) => {
                setNStatus(e);
              }}
            />
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}
