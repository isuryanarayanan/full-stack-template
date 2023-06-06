import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Store, { Dispatch } from "../redux";
import { useDispatch } from "react-redux";

export default function HomeScreen() {
  const [registered, setRegistered] = useState(null);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    // Get the base url from state and set it as registered

    console.log(Store.getState());
  }, []);

  return (
    <View>
      {registered !== null ? (
        <Text>
          {registered === "true"
            ? "Registered Successfully!"
            : "Registration Failed!"}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
