import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Avatar, Text, Button } from 'react-native-paper';
import userData from "./data.json";
import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {userData.map((user) => (
          <ColorChangingCard key={user.name} user={user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function ColorChangingCard({ user }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: pressed || isPressed ? getRandomColor() : "#fff" },
      ]}
    >
      <View style={styles.cardContent}>
        <Avatar.Image 
          source={{ uri: user.photo_url }} 
          size={75}
          style={styles.avatar}
        />
        <Text style={styles.boldText}>{user.name}</Text>
        <Text style={styles.subtitle}>{user.email}</Text>
        <Card.Actions style={styles.button}>
          <Button onPress={() => console.log(`Send Email to ${user.email}`)}>
            Send Email
          </Button>
        </Card.Actions>
      </View>
    </Pressable>
  );
}

function getRandomColor() {
  const colors = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9"];
  return colors[Math.floor(Math.random() * colors.length)];
}
