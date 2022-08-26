import React from 'react';
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect} from "react"
import Login from './Login';
import SignUp from './SignUp';

function LoginSignup({handleLogin, setUser, username, setUsername, password, setPassword, token, setToken, setIsLoggedIn, isLoading}) {
   const [isLogIn, setIsLogIn] = useState(true)

   return (
    <>
      <Image 
      style={{width: 350, height: 175, marginLeft: 10, marginTop: 150}}
      source={require("./Photos/VORBA.png")}
      />
    {isLogIn ? 
    <Login setIsLogIn={setIsLogIn} handleLogin={handleLogin} setUser={setUser} username={username}setUsername={setUsername} password={password} setPassword={setPassword} token={token} setToken={setToken} isLoading={isLoading}/> : <SignUp setIsLogIn={setIsLogIn} setIsLoggedIn={setIsLoggedIn}/>
    }
    </>
    
   )
}



// const style = StyleSheet.create(
//    vorbaLogo: {

//    }



export default LoginSignup;