import React, { useState } from 'react';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordsMatch = password === confirmPassword;

  const handleRegistration = async () => {
    // here, add your own logic for registration
    // for the sake of simplicity, we are considering registration successful if passwords match

    if (passwordsMatch) {
      try {
        await AsyncStorage.setItem('REGISTERED', 'true'); // set REGISTERED=true in local storage
        navigation.navigate('Home'); // navigate to Home screen
      } catch (error) {
        console.error('Failed to save the data to the storage');
      }
    } else {
      try {
        await AsyncStorage.setItem('REGISTERED', 'false'); // set REGISTERED=false in local storage
        console.error('Passwords do not match!');
      } catch (error) {
        console.error('Failed to save the data to the storage');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <HelperText type="error" visible={!passwordsMatch}>
        Passwords do not match!
      </HelperText>
      <Button
        mode="contained"
        onPress={handleRegistration}
      >
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
});
