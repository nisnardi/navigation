import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Root Layout - Home" }} />
      <Stack.Screen name="about" options={{ title: "Root Layout - About" }} />
      <Stack.Screen
        name="profile"
        options={{ title: "Root Layout - Profile" }}
      />
      <Stack.Screen
        name="settings"
        options={{ title: "Root Layout - Settings" }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
