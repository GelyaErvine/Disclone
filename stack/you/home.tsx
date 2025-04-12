import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../styles/styles";
import {
  PaperProvider,
  Card,
  Button,
  Text,
  IconButton,
  Avatar,
} from "react-native-paper";

export default function YouHome({ navigation, route }) {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <IconButton
              style={styles.tright}
              icon="shopping"
              mode="contained"
            />
            <IconButton
              style={styles.tright}
              icon="cog"
              mode="contained"
              onPress={() => navigation.navigate("Settings")}
            />
          </View>
          <View style={styles.Account}>
            <Avatar.Icon icon={"account"} />
            <Button
              icon={route.params?.istatus ? null : "plus"}
              children={
                route.params?.istatus ? route.params.istatus : "Add Status"
              }
              mode="outlined"
              style={{ height: 40, marginHorizontal: 10 }}
              onPress={() =>
                navigation.navigate("Status", {
                  inote: route.params?.inote,
                  istatus: route.params?.istatus,
                })
              }
            />
          </View>
          <Text variant="titleLarge">PASS NAME DATA HERE</Text>
          <Card style={styles.card}>
            <Card.Content style={styles.card}>
              <Text variant="titleMedium">About Me</Text>
              <Text variant="bodyMedium">PASS ABOUT ME DATA HERE</Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleMedium">Member Since</Text>
              <Text variant="bodyMedium">1 Dec 2019</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={styles.card}>
              <Text variant="titleMedium">Connections</Text>
              <Text variant="bodyMedium">PASS ABOUT ME DATA HERE</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={styles.card}>
              <Text variant="titleMedium">Your Friends</Text>
            </Card.Content>
          </Card>
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate("Note", {
                inote: route.params?.inote,
                istatus: route.params?.istatus,
              })
            }
          >
            <Card.Content style={styles.card}>
              <Text variant="titleMedium">Note</Text>
              <Text variant="bodyMedium">{route.params?.inote}</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
