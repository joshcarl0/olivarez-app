import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PhilosophyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Philosophy</Text>
        <Text style={styles.content}>
          Olivarez College is committed to provide every learner with applicable
          knowledge, competencies and field expertise while transforming them to
          become competent, productive and service-oriented citizens in support
          of social, economic and development needs of the country and the
          demands of the global society.
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
