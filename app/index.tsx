import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/about">Navegar a About</Link>
      <Link href="/settings">Navegar a Settings</Link>
      <Link href="/modal">Navegar a Modal</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
