import React from 'react';
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect} from "react"

function SignUp({setIsLogIn, setIsLoggedIn}) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const handleBackToLogin = () => {
        setIsLogIn(true)
    }

    const handleSignUp = () => {
        const newUser = {
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName
        }

        fetch("http://localhost:3000/users", 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(newUser)
      }) //POST, send token as body , getter funcion
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setUser(data.user)})
          setIsLoggedIn(true)
    }

    

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign up for Vorba</Text>

      <View style={styles.names}> 
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      </View>
      
    
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
          style={styles.signUpButton}
          onPress={handleSignUp}
          underlayColor='#fff'>
          <Text style={styles.signUpText}>Create Account</Text>
       </TouchableOpacity>
      <Text 
      style={styles.text}
      onPress={handleBackToLogin}>
        Back to Login
      </Text>
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
    text: {
        color: "#3777f0"
    },
    signUpButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3777f0",
        width: 180,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },
    signUpText: {
        color: "white"
    }
  });

export default SignUp; 