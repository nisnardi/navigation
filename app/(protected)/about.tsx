import { View, StyleSheet, Button } from "react-native";
import { Link, router } from "expo-router";

export default function About() {
  const volver = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate("/home");
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/home">Navegar a Home</Link>
      <Link href="/profile">Navegar a Profile</Link>
      <Button title="Volver a pantalla anterior" onPress={volver} />
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
