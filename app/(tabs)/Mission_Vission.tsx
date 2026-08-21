import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MissionVisionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Mission</Text>
        <Text style={styles.content}>
          Provide a collaborative learning environment where every creative,
          communicative and critical thinking learner is prepared for employment
          and service commitment in the country and the world.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Vision</Text>
        <Text style={styles.content}>
          A quality 21st century global educational institution that advocates
          relevant inclusive outcomes – based education toward lifelong learning
          and sustainable career development in diverse contexts in response to
          national and global need.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#006633", // Olivarez Green
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
  },
});
