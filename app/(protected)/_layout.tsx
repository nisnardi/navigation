import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Button } from "react-native";
import { useAuth } from "@/context/auth";
import { Redirect, useRouter } from "expo-router";

export default function RootLayout() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() => {
                logout();
                router.replace("/");
              }}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="home"
          options={{ headerTitle: "Home", drawerLabel: "Home Label" }}
        />
        <Drawer.Screen name="about" options={{ headerTitle: "About" }} />
        <Drawer.Screen name="profile" options={{ headerTitle: "Profile" }} />
        <Drawer.Screen name="settings" options={{ headerTitle: "Settings" }} />
        <Drawer.Screen
          name="modal"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
