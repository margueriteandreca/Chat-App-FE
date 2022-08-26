import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import ChatListItem from "./ChatListItem";
import { useState } from "react";
import EditProfile from "./EditProfile";
import AsyncStorage from '@react-native-async-storage/async-storage';

const removeToken = () => {
    try {
        AsyncStorage.removeItem('@token')
    } catch (e) {
        console.log('ASYNC STORAGE REMOVE ERROR: ', e)
    }
}

function Settings({user, setUser, token, setToken, setIsLoading}) {
    const [isEditProfile, setIsEditProfile] = useState(false)

    const handleOpenEditBio = () => {
        setIsEditProfile(true)
    }

    const handleLogout = () => {
        setUser(null)
        setToken(null)
        removeToken()
        setIsLoading(false)

    }

    const clearChats = () => {
        fetch(`http://localhost:3000/conversations/${user.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center' }}>
        <ChatListItem user={user} handleOpenEditBio={handleOpenEditBio} />
        
        <TouchableOpacity style={styles.clearChatContainer} onPress={clearChats}>
            <Text style={styles.clearChatText}>
                Clear All Chats 
            </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.logContainer} onPress={handleLogout}>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </TouchableOpacity>

        {isEditProfile ? <EditProfile user={user} setIsEditProfile={setIsEditProfile}/> : null}

        
      </View>
    );
  }

  const styles = StyleSheet.create({
    logoutText: {
        color: "black"
    },
    logContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        height: 50,
        width: "100%",
        backgroundColor: "white",
        marginTop: 10
    },
    clearChatText: {
        color: "red"
    },
    clearChatContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "100%",
        backgroundColor: "white",
        marginTop: 10
    }
  })




  export default Settings; 