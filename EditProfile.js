import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ChatListItem from './ChatListItem';

function EditProfile({user}) {
    const [status, setStatus] = useState("")

    const handleEditStatus = () => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "appliation/json"
            },
            body: JSON.stringify({status: status})
        })
        .then(res => res.json())
        .then(data => console.log("STATUS UPDATE", data))
      }

      console.log("status????????", status)

    return (
        <View style={profileStyles.profileContainer}>
        <View style={profileStyles.profileCardContainer}>
        <ChatListItem user={user}/>

        <View style={profileStyles.statusContainer}>
            <Text style={profileStyles.inputlabel}>
            Edit Status
            </Text>
        <TextInput 
        style={profileStyles.input}
        onChangeText={setStatus}
        ></TextInput>
        <TouchableOpacity onPress={handleEditStatus}>
            <Text>Update</Text>
        </TouchableOpacity>
        </View>

        </View>
        
        <TouchableOpacity style={profileStyles.deleteContainer}>
            <Text style={profileStyles.deleteText}>
                Delete account
            </Text>
        </TouchableOpacity>
        </View>
    )
}


const profileStyles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "whitesmoke",
        justifyContent: "space-evenly",
        alignItems: "center"

    },
    profileCardContainer: {
        display: "flex",
        height: 300,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center"

    },
    statusContainer: {
        display: "flex",
        // backgroundColor: "red",
        width: 320

    },
    input: {
        backgroundColor: "whitesmoke",
        height: 50,
        width: "100%",
        borderRadius: 10
    },
    inputlabel: {
        paddingLeft: 5,
        paddingBottom: 5
    },

    deleteText: { 
        color: "red"
    },
    
    deleteContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        height: 50,
        width: "100%",
        backgroundColor: "white"
    }
    
    
  })


export default EditProfile;