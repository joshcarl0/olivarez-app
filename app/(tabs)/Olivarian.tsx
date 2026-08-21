import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function OlivarianScreen() {
  const attributes = [
    { letter: "O", description: "Outstanding performance in the workplace" },
    {
      letter: "L",
      description: "Love and care for nature toward sustainability",
    },
    { letter: "I", description: "Innovative and Creative" },
    { letter: "V", description: "Values-driven" },
    { letter: "A", description: "Ability to collaborate" },
    { letter: "R", description: "Research and result-oriented" },
    { letter: "I", description: "Integrity-centered for one's and others" },
    { letter: "A", description: "Analytic and communicative competent" },
    { letter: "N", description: "Nation Builder through quality service" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olivarian Identity</Text>
      <Text style={styles.subtitle}>
        Concomitant to such attributes, every Olivarian graduate shall emerge
        and be known with reputable branding among the rest in the field through
        qualities that bespeak of a true ‘One Proud Olivarian’: “OLIVARIAN”
      </Text>

      <View style={styles.listContainer}>
        {attributes.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.letter}</Text>
            </View>
            <Text style={styles.itemText}>{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006633",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  listContainer: {
    gap: 12,
    width: "100%",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#006633",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#FFD700", // Gold accent para sa Olivarez theme
    fontWeight: "bold",
    fontSize: 16,
  },
  itemText: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
  },
});
