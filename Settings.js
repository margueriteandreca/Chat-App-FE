import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import ChatListItem from "./ChatListItem";
import { useState } from "react";
import EditProfile from "./EditProfile";

function Settings({user}) {
    const [isEditProfile, setIsEditProfile] = useState(true)

    const handleOpenEditBio = () => {
        setIsEditProfile(true)
    }

    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center' }}>
        <ChatListItem user={user} onPress={handleOpenEditBio} />
        
        <TouchableOpacity style={styles.clearChatContainer} onPress={() => {}}>
            <Text style={styles.clearChatText}>
                Clear All Chats 
            </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.logContainer} onPress={() => {}}>
            <Text style={styles.logoutText}>
                Logout
            </Text>
        </TouchableOpacity>

        {isEditProfile ? <EditProfile /> : null}

        
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