import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer, Navigate } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Contacts from './Contacts';
import Settings from './Settings';
import Chats from './Chats';
import LoginSignup from './LoginSignup';

// import {
//   ActionCable,
//   Cable,
// } from '@kesha-antonov/react-native-action-cable'


// const actionCable = ActionCable.createConsumer("ws://localhost:3000/cable");

// console.log('!!! cable', actionCable);

// const cable = new Cable({})

const Tab = createBottomTabNavigator();

const storeLogin = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token)
  } catch (e) {
    console.log("ASYNC STORAGE SET ERROR", e)
  }
}

const getLogin = async (setToken, setIsLoading) => {
  try {
    const token = await AsyncStorage.getItem("@token")
    if(token !== null) {
      setToken(token)
    } else {
      setIsLoading(false)
    }
  } catch(e) {
    console.log('ASYNC STORAGE ERROR', e)
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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getLogin(setToken, setIsLoading);
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
          setUser(data)
          setToken(token);
          setIsLoggedIn(true)
        })
      }
      else {
        setIsLoggedIn(false)
      }
  }, [token])

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      switch (route.name) {
        case "Contacts": 
          return (<Image source={ focused ? require("./Icons/contact-book.png") : require("./Icons/contact-book-2.png")} style={{ height: 25, width: 25}}/>)
        case "Chats": 
          return (<Image source={ focused ? require("./Icons/bubble-chat.png") : require("./Icons/bubble-chat-2.png")} style={{ height: 25, width: 25}}/>)
        case "Settings": 
          return (<Image source={focused ? require("./Icons/gear.png") : require("./Icons/gear-2.png")} style={{ height: 25, width: 25}}/>)
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


  console.log(user)
  console.log("!!!!!!!!!!", token)


  function ChatsComponent({ navigation, route }) {
    return <Chats token={token} user={user} route={route} navigation={navigation} />
  }

  function SettingsComponent() {
    return <Settings user={user} setUser={setUser} token={token} setToken={setToken} storeLogin={storeLogin} setIsLoading={setIsLoading}/>
  }

  function ContactsComponent() {
    return <Contacts token={token} user={user}/>
  }

  return (
    <>
      {isLoggedIn ?
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Contacts" component={ContactsComponent} />
            <Tab.Screen name="Chats" component={ChatsComponent} />
            <Tab.Screen name="Settings" component={SettingsComponent} />
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
          isLoading={isLoading}
        />
      }
    </>
  );
}

export default App; 
