import { useRouter } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useAuth } from "@/context/auth";

export default function Index() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (username.length > 0) {
      login(username);
      router.replace("/home"); // Redirect a la pantalla home
    }
  };

  const handleChangeUsername = (text: string) => {
    if (text.length > 0) {
      setUsername(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={handleChangeUsername}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: { borderWidth: 1, width: 200, marginBottom: 10, padding: 8 },
});
