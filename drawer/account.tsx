import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export default function Account({ navigation }) {
  return (
    <PaperProvider>
      <ScrollView style={styles.scroll}>
        <Text variant="titleSmall">Account Information</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Username</Text>
            <Divider />
            <Text variant="bodyMedium">Display Name</Text>
            <Divider />
            <Text variant="bodyMedium">Email</Text>
            <Divider />
            <Text variant="bodyMedium">Phone</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">How You sign into your account</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Password</Text>
            <Divider />
            <Text variant="bodyMedium">Security Keys</Text>
            <Divider />
            <Text variant="bodyMedium">View Backup COdes</Text>
            <Divider />
            <Text variant="bodyMedium">Authenticator</Text>
            <Divider />
            <Text variant="bodyMedium">SMS Backup Authentication</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Account Managment</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Disable Account</Text>
            <Divider />
            <Text variant="bodyMedium">Delete Account</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}
