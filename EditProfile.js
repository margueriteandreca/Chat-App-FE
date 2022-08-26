import * as React from 'react';
import { useState, useEffect } from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ChatListItem from './ChatListItem';

function EditProfile({user, setIsEditProfile}) {
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
        setIsEditProfile(false)
      }


    const handleBackToSettings = () => {
        setIsEditProfile(false)
    }

      

    return (
        <View style={profileStyles.profileContainer}>
        <View style={profileStyles.profileCardContainer}>
        <View style={profileStyles.header}>
        <TouchableOpacity 
                style={profileStyles.backButtonContainer}
                onPress={handleBackToSettings}>
                    <Text style={profileStyles.backButton}>
                    {`<`}
                    </Text>
        </TouchableOpacity>
    
        <ChatListItem user={user}/>

        </View>

        <View style={profileStyles.statusContainer}>
            <Text style={profileStyles.inputlabel}>
            Edit Status
            </Text>
        <TextInput 
        style={profileStyles.input}
        onChangeText={setStatus}
        ></TextInput>

        <TouchableOpacity 
        onPress={handleEditStatus}
        style={profileStyles.updateButton}>
            <Text style={profileStyles.updateButtonText}>Update</Text>
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
        justifyContent: "flex-start",
        alignItems: "center"

    },
    profileCardContainer: {
        display: "flex",
        height: 320,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    statusContainer: {
        display: "flex",
        justifyContent: "center",
        width: 320,
        height: 200,
        marginTop: 10

    },
    input: {
        backgroundColor: "whitesmoke",
        height: 50,
        width: "100%",
        borderRadius: 10,
        marginTop: 5
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
        backgroundColor: "white",
        marginTop: 150
    },
    backButton: {
        color: "grey",
        fontSize: "24",

    },
    backButtonContainer: {
        width: 50,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1
        
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 30
        

    },
    updateButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3777f0",
        width: 320,
        height: 40,
        borderRadius: 5,
        marginTop: 20
    },
    updateButtonText: {
        color: "white"
    }
    
    
  })


export default EditProfile;