import React from "react";
import { Button, View } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      {/* Your Login Form */}
      <Button title="Submit" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
