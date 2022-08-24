import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Contacts from './Contacts';
import Settings from './Settings';
import Chats from './Chats';
import LoginSignup from './LoginSignup';



const Tab = createBottomTabNavigator();

const storeLogin = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token)
  } catch (e) {
    console.log("this didn't work")
  }
}

const getLogin = async (setToken) => {
  try {
    const token = await AsyncStorage.getItem("@token")
    if(token !== null) {
      setToken(token)
    }
  } catch(e) {
    console.log('!!! error', e)
    // error reading value
  }
}

//////////////////////////////////////////////////////////////////////////

function App() {

  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState("")

  useEffect(() => {
    getLogin(setToken);
  }, [])

  useEffect(() => {
    if (token) {    
    fetch("http://localhost:3000/me", 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({token})
      }) //POST, send token as body , getter funcion
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setUser(data.user)
          setToken(token);
        })
        setIsLoggedIn(true)
      }
  }, [token])

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      switch (route.name) {
        case "Contacts": 
          return (<Image source={require("./Icons/contact-book.png")} style={{ height: 25, width: 25}}/>)
        case "Chats": 
          return (<Image source={require("./Icons/bubble-chat.png")} style={{ height: 25, width: 25}}/>)
        case "Settings": 
          return (<Image source={require("./Icons/gear.png")} style={{ height: 25, width: 25}}/>)
        default: 
          return (<Image />)
      } 
    },
    tabBarActiveTintColor: "#3872E9",
    tabBarInactiveTintColor: "gray",
  })

  const handleLogin = () => {
    console.log('!!!', username, password)
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "appliation/json"
        },
        body: JSON.stringify({username, password})
    })
    .then(res => {
        res.json()
        .then(data => {
          setToken(data.token)
          setUser(data)
          console.log('!!! data', data)
          storeLogin(data.token);
          setIsLoggedIn(true);
        })
    })
  }




  return (
    <>
      {isLoggedIn ?
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Contacts" component={Contacts} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Settings" component={Settings} user={user} />
          </Tab.Navigator>
        </NavigationContainer> : 
        <LoginSignup 
          handleLogin={handleLogin} 
          setUser={setUser} 
          username={username}
          setUsername={setUsername} 
          password={password} 
          setPassword={setPassword} 
          token={token} 
          setToken={setToken}
          setIsLoggedIn={setIsLoggedIn}
        />
      }
    </>
  );
}

export default App; 
