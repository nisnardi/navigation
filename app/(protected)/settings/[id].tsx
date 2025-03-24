import { Link, useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function SettingsWithId() {
  const { id, name } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings con ID: {id}</Text>
      {name !== undefined ? (
        <Text style={styles.text}>Nombre: {name}</Text>
      ) : null}

      <Link href="/settings">Volver</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
