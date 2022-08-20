import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from './Contacts';
import Settings from './Settings';
import Chats from './Chats';
import Login from './Login';



const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      switch (route.name) {
        case "Contacts": 
          return (<Image source={require("./Icons/contact-focus.svg")} style={{ height: 10, width: 10}}/>)
        case "Chats": 
          return (<Image />)
        case "Settings": 
          return (<Image />)
        default: 
          return (<Image />)
      } 
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })

  return (
    <>
    {isLoggedIn ?
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Settings" component={Settings}  />
      </Tab.Navigator>
    </NavigationContainer> : <Login />
    
    }
    </>
  );
}


