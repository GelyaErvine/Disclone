import { Card, Divider, PaperProvider, Text } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export default function ContentSocial({ navigation }) {
  return (
    <PaperProvider>
      <ScrollView style={styles.scroll}>
        <Text variant="titleSmall">Sensitive Media</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Direct Messages from friends</Text>
            <Divider />
            <Text variant="bodyMedium">Direct Messages from others</Text>
            <Divider />
            <Text variant="bodyMedium">Messages in server channels</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Direct Message Spam</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Filter all</Text>
            <Divider />
            <Text variant="bodyMedium">Filter from non-friends</Text>
            <Divider />
            <Text variant="bodyMedium">Do not filter</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Age-restricted commands</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Enable age-restricted commands</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Server settings</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Server defaults</Text>
            <Divider />
            <Text variant="bodyMedium">Direct Messages</Text>
            <Divider />
            <Text variant="bodyMedium">Message requests</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Friend requests</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Everyone</Text>
            <Divider />
            <Text variant="bodyMedium">Friends of Friends</Text>
            <Divider />
            <Text variant="bodyMedium">Server Members</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Accounts you've blocked or ignored</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Blocked accounts</Text>
            <Divider />
            <Text variant="bodyMedium">Ignored accounts</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Find your friends</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Sync Contacts</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Find your friends</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Sync Contacts</Text>
          </Card.Content>
        </Card>
        <Text variant="titleSmall">Discovery</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium">Phone</Text>
            <Divider />
            <Text variant="bodyMedium">Email</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}
