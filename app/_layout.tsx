import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="index" options={{ title: "Home" ,headerShown:false}} />
        <Stack.Screen name="login" options={{ title: "Login",headerShown:false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})