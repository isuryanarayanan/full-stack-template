import React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  button: {
    marginBottom: 10,
  },
});
