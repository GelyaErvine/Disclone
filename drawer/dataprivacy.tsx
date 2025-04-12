import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export default function DataPrivacy({ navigation }) {
  return (
    <PaperProvider>
      <ScrollView style={styles.scroll}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Use data to improve Discord</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">
              Use data to personalize my Discord experience
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">In-game rewards (aka Quests)</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Request all of my data</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">
              Enable persistent verification codes
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Terms of service</Text>
            <Divider />
            <Text variant="bodyMedium">Privacy Policy</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}
