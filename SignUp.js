import React from 'react';
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect} from "react"

function SignUp() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Log In To ShibaTalk</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="user name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        secureTextEntry
      />
    </View>
    )

}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 180,
      borderRadius: 5
    },
  });

export default SignUp; 