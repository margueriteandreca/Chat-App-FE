import React from 'react';
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect} from "react"


function Login({handleLogin, setIsLogIn, username, setUser, setUsername, password, setPassword, token, setToken, isLoading}) {


    const handleOpenSignUp = () => {
        setIsLogIn(false)
    }

    return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>


      {isLoading ? <ActivityIndicator size="large" color="#3777f0" /> :
      <>
      <Text>Log In</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="username"
        autoCapitalize="none"
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
          onPress={handleLogin}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpButtonContainer}><Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={handleOpenSignUp}
          underlayColor='#fff'>
          <Text style={styles.clickToSignUp}>Sign up</Text>
        </TouchableOpacity>
        </View>
        </>
      
      
      }
      
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
        backgroundColor: "#3777f0",
        width: 180,
        height: 40,
        borderRadius: 5

    },
    loginText: {
        color: "white"
    },
    signUpButtonContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    clickToSignUp: {
        color: "#3777f0"

    }
  });

export default Login; 