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

export default function YouNote({ navigation, route }) {
  const [nNote, setNNote] = useState();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() =>
              navigation.popTo("Home", { inote: route.params?.inote, istatus: route.params?.iStatus })
            }
          />
          <Appbar.Content title="Edit Notes" />
          <Appbar.Action
            icon={"floppy"}
            onPress={() => navigation.popTo("Home", { inote: nNote , istatus: route.params?.iStatus })}
          />
        </Appbar.Header>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Note</Text>
            <TextInput
              label="Note"
              defaultValue={route.params?.inote}
              multiline={true}
              onChangeText={(e) => {
                setNNote(e);
              }}
            />
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}
