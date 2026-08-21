import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HymnScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olivarez Hymn</Text>
      <Text style={styles.content}>
        The Olivarez College Hymn is reverently and passionately sung by the
        Olivarian community in either opening or closing ceremonies of all
        academic and institutional activities inside the campus.
      </Text>

      <View style={styles.lyricscard}>
        <Text style={styles.lyrics}>
          To you dear Olivarez College{"\n"}
          Faithfull children we will be{"\n"}
          With the golden hearts to last forever{"\n"}
          We vow for eternity
        </Text>

        <Text style={styles.refrainHeader}>REFRAIN</Text>
        <Text style={styles.refraing}>
          To the gold, red, and green{"\n"}
          we pledge our loyalty{"\n"}
          Our light, our guide and our hope{"\n"}
          Olvarez College
        </Text>

        <Text style={styles.Verse}>
          Our knowledge will last forever{"\n"}
          To serve humanity{"\n"}
          The Christian teachings given us{"\n"}
          Shall forever in our hearts
        </Text>

        <Text style={styles.repeatNote}>(Refeat REFRAIN twice)</Text>
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
  content: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  lyricscard: {
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
  lyrics: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
    lineHeight: 24,
  },
  refrainHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006633",
    marginBottom: 10,
    textAlign: "center",
  },
  refraing: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
    lineHeight: 24,
  },
  Verse: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
    lineHeight: 24,
  },
  repeatNote: {
    fontSize: 14,
    color: "#333333",
    fontStyle: "italic",
    textAlign: "center",
  },
});
