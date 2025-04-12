import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export default function FamilyCenter({ navigation }) {
  return (
    <PaperProvider>
      <ScrollView style={styles.scroll}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Family Center Information</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}
