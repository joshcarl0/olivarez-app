import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>OLIVAREZ COLLEGE</Text>
            <Text style={styles.headerSubtitle}>
              Educating the Mind, Body, and Soul
            </Text>
          </View>
        ),
        tabBarActiveTintColor: "#006633", // Olivarez Green
        tabBarInactiveTintColor: "#888888",
        tabBarStyle: { height: 65, paddingBottom: 8 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Philosophy"
        options={{
          title: "Philosophy",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Mission_Vission"
        options={{
          title: "Mission & Vision",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Olivarez Hymn"
        options={{
          title: "Hymn",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Olivarian"
        options={{
          title: "Olivarian",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#006633", // Olivarez Green
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 4,
    borderBottomColor: "#FFD700", // Gold Accent
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  headerSubtitle: {
    color: "#FFD700",
    fontSize: 12,
    marginTop: 2,
  },
});
