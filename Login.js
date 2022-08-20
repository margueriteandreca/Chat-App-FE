import React from 'react';
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect} from "react"

function Login({setIsLogIn}) {
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
      <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {}}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.clickToSignUp}
          onPress={() => {}}
          underlayColor='#fff'>
          <Text style={styles.clickToSignUp}>Login</Text>
        </TouchableOpacity>
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
    loginButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
        width: 180,
        height: 30,
        borderRadius: 5

    }
  });

export default Login; 